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
    
    for (let i=0; i <collisionObject.length; i++) {
    
     
    const collName = document.createElement('p');
    const collSizeMax = document.createElement('p');
    const collSizeMin = document.createElement('p');
    const collSpeed = document.createElement('p');
    // const collDist = document.createElement('p');

    

    collName.innerText = collisionObject[i].name;
    collSizeMax.innerText = collisionObject[i].estimated_diameter.feet.estimated_diameter_max;
    collSizeMin.innerText = collisionObject[i].estimated_diameter.feet.estimated_diameter_min;
    collSpeed.innerText = collisionObject[i].close_approach_data[0].relative_velocity].miles_per_hour;
    // collDist.innerText = collisionObject[i].close_approach_data[miss_distance].miles;
    
    
    
    summary.appendChild(collName);
    summary.appendChild(collSizeMax);
    summary.appendChild(collSizeMin);
    summary.appendChild(collSpeed);
    // summary.appendChild(collDist);
    }


  });
  }
  //   for (let i=0; i < collisionObject.length; i++) {  
  //       // console.log(collisionObject[i].name);

const submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('button was pressed');
    let userDate = document.querySelector('#userDateInput').value;
    fetchUserData(userDate)
});
