// https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-01&end_date=2021-10-01&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX
//KEY= 0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX
/*
Get a working fetch
  - deserialize the API
  - store the fetch in a const variable.

Get a autopopulate "Todays Date" < p > tag connected to the api.API
  - autopopulate date(html ?)
  - query selector on the < p >
  - find < p > on the DOM
  - get the date from the autopolulate
Get the "Number of Objects" to add up to the fetch Data
  - query selector < p2 >; find location on the DOM
  - change innerText, to the info from the fetch "number of objects"

fetch
*/
const todaysDate = new Date();
console.log(todaysDate);
let todaysDateFormatted = `${todaysDate.getFullYear()}-${todaysDate.getMonth()+1}-${todaysDate.getDate()}`;
console.log(todaysDateFormatted);


let displayedDate = `${todaysDate.getMonth()+1}-${todaysDate.getDate()}-${todaysDate.getFullYear()}`;
console.log(displayedDate);
// https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


const fetchData = (dateInput) => {
  fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateInput}&end_date=${dateInput}&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX`)
    .then((response) => { return response.json() })
    .then((responseJSON) => {
    // console.log(responseJSON); 
    
    const numP = document.querySelector('#numP');
    numP.innerText = responseJSON.element_count; 
    })
}

//This is where I modify the dom to include the section I need.
//calling on the dom for the date <p> and assigning it todays date
const dateP = document.querySelector('#dateP');
dateP.innerText = todaysDateFormatted;
dateP.innerText = displayedDate;

//calling on the number <p> and need to assign the fetch data



window.addEventListener('load', (event) => {
  event.preventDefault();  
  // console.log("hello, the addEvent is working")
  fetchData(todaysDateFormatted) 
  //This is where the number API needs to live
})

//-------------------------------------------------------------------------------

const fetchUserData = (userDate) => {
  fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${userDate}&end_date=${userDate}&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX`)
    .then((response) => { return response.json() })
    .then((responseJSON) => {
    // console.log(responseJSON); 
    
  
    // --------------------------------------------------------------------------
      // call on the summary
      // create a div
      // append the div to the summary
      // add content to the div (name, size of object, speed, distance from earth)
    // --------------------------------------------------------------------------
    const summary = document.querySelector('summary');
    const collisionObject = responseJSON.near_earth_objects[userDate];  
    console.log(collisionObject); 

    //----------------------------------------------------------
    const dateSeparator = document.createElement('div');
    dateSeparator.className = 'dateBanner';
    dateSeparator.innerText = `${userDate}`;
    summary.appendChild(dateSeparator);            
    //----------------------------------------------------------
    
    for (let i=0; i <collisionObject.length; i++) {
    
    const astroidDiv = document.createElement('div'); //I may have to give this a class name for styling purposes.
    astroidDiv.className = "tiles";
    const collName = document.createElement('p');
    // const collName = document.createElement('a');
    const collSizeMax = document.createElement('p');
    const collSizeMin = document.createElement('p');
    const collSpeed = document.createElement('p');
    const collDist = document.createElement('p');

    // collName.href = `'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${collisionObject[i].name}&view=VOP'`;
    // collName.target = '_blank';

    collName.innerText = `Name of Astroid:
    ${collisionObject[i].name}`;
    collSizeMax.innerText = `Estimated Max Diameter:
    ${collisionObject[i].estimated_diameter.feet.estimated_diameter_max} feet`;
    collSizeMin.innerText = `Estimated Min Diameter:
    ${collisionObject[i].estimated_diameter.feet.estimated_diameter_min} feet`;
    collSpeed.innerText = `Speed at Close Approach:
    ${collisionObject[i].close_approach_data[0].relative_velocity.miles_per_hour} mph`;
    collDist.innerText = `Distance from Earth at Close Approach:
    ${collisionObject[i].close_approach_data[0].miss_distance.miles} miles away`;
    
    
    summary.appendChild(astroidDiv); //This is appending the new div to the summary section;
    astroidDiv.appendChild(collName);
    astroidDiv.appendChild(collSizeMax);
    astroidDiv.appendChild(collSizeMin);
    astroidDiv.appendChild(collSpeed);
    astroidDiv.appendChild(collDist);

    // astroidDiv.style.backgroundColor = 'red';
    astroidDiv.style.border = '2px solid white';
    astroidDiv.style.marginBottom = '10px';
    astroidDiv.style.marginLeft = '10px';
    astroidDiv.style.marginRight = '10px';
    // astroidDiv.style.width = '22%';  
    collName.style.marginTop = '20px';
    collName.style.marginBottom = '0px';
    collName.style.marginLeft = '5px';
    collName.style.marginRight = '5px';
  
    collSizeMax.style.marginTop = '10px';
    collSizeMax.style.marginBottom = '5px';
    collSizeMax.style.marginLeft = '5px';
    collSizeMax.style.marginRight = '5px';
  
    collSizeMin.style.marginTop = '5px';
    collSizeMin.style.marginBottom = '5px';
    collSizeMin.style.marginLeft = '5px';
    collSizeMin.style.marginRight = '5px';
  
    collSpeed.style.marginTop = '5px';
    collSpeed.style.marginBottom = '5px';
    collSpeed.style.marginLeft = '5px';
    collSpeed.style.marginRight = '5px';
  
    collDist.style.marginTop = '5px';
    collDist.style.marginBottom = '20px';
    collDist.style.marginLeft = '5px';
    collDist.style.marginRight = '5px';
  
  }


  });
  }
  

const submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('button was pressed');
    let userDate = document.querySelector('#userDateInput').value;
    fetchUserData(userDate)
});
//http://www.learningaboutelectronics.com/Articles/How-to-create-a-refresh-page-button-using-Javascript.php
const refresh = document.querySelector('#button');
refresh.addEventListener('click', (event) => {
  event.preventDefault();
  location.reload();
});