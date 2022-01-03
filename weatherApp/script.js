/* Weather App Notes
  [x] The User will press a button to get their weather data
  [x] When pressed, the button will get the browser's geolocation data
  [x] Take the latitude and longitude, and fetch the weather data with it
  [x] Display the weather data in the Document.
*/
const baseURL = 'https://api.open-meteo.com/v1/forecast';
// Get the button that user will interact with
let buttonElement = document.getElementById('geolocation-weather');
// Grab the area where the results will be displayed
let resultsElement = document.getElementById('results');

function displayWeatherData(temperature, windSpeed) {
    // Clear previous results
    resultsElement.innerHTML = '';
    let temperatureElement = document.createElement('p');
    let windSpeedElement = document.createElement('p');
    temperatureElement.innerText = temperature;
    windSpeedElement.innerText = windSpeed;
    resultsElement.appendChild(temperatureElement);
    resultsElement.appendChild(windSpeedElement);
}

function fetchWeather(latitude, longitude) {
    let url = `${ baseURL }?latitude=${ latitude }&longitude=${ longitude }&current_weather=true&temperature_unit=fahrenheit`;
    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            let temperature = jsonData.current_weather.temperature;
            let windSpeed = jsonData.current_weather.windspeed;
            displayWeatherData(temperature, windSpeed);
        })
}

function retrieveGeolocationData() {
    navigator.geolocation.getCurrentPosition(result => {
        console.log(result);
        // Object Destructuring (research later)
        // let { latitude, longitude } = result.coords;
        let latitude = result.coords.latitude;
        let longitude = result.coords.longitude;

        fetchWeather(latitude, longitude);
    });
}
buttonElement.addEventListener('click', () => {
    console.log('testing');
    retrieveGeolocationData();
});