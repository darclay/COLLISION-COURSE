// https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-10-01&end_date=2021-10-01&api_key=0eJcYmnO2iE9jsyArre7QyVJRPWqTsaT7BGUaLHX

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

console.log('Hello')

const fetchData = (dateInput) => {
  const nasaAPI = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateInput}&end_date=?{date format YEAR-MN-DY}&api_key=${PERSONAL KEY GOES HERE}'


}

