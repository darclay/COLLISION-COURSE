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
// console.log(todaysDate);
let todaysDateFormatted = `${todaysDate.getFullYear()}-${todaysDate.getMonth()+1}-${todaysDate.getDate()}`;
console.log(todaysDateFormatted);
// https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


const fetchData = (dateInput) => {
  fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateInput}&end_date=${dateInput}&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX`)
    .then((response) => { return response.json() })
    .then((responseJSON) => {
      console.log(responseJSON);    
    })
}
fetchData(todaysDateFormatted);


const dateP = document.querySelector('#dateP');
dateP.innerText = todaysDateFormatted;