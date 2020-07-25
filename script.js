let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  let formatedDate = `${currentDay}, ${currentHour}:${currentMinutes}`;
  return formatedDate;
}

let todaysTime = document.querySelector("#exactTime");
todaysTime.innerHTML = formatDate(currentTime);

function displayWeatherCondition(response) {
  document.querySelector("#city-input").innerHTML = response.data.name;
  document.querySelector("#daytemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#conditiontoday").innerHTML =
    response.data.weather[0].main;
}

function locationSearch(event) {
  event.preventDefault();
  let apiKey = "ddd2817c1cc0ded847d366c31612117d";
  let city = document.querySelector("#location-search").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchMyCity(position) {
  let apiKey = "ddd2817c1cc0ded847d366c31612117d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function currentLocationSearch(event) {
  navigator.geolocation.getCurrentPosition(searchMyCity);
}

let searchForm = document.querySelector("#location-input");
searchForm.addEventListener("submit", locationSearch);

let currentLocationButton = document.querySelector("#currentLocationSearch");
currentLocationButton.addEventListener("click", currentLocationSearch);

function convertCelsius(event) {
  event.preventDefault();
  let celsiusDegrees = document.querySelector("#daytemperature");
  celsiusDegrees.innerHTML = 15;
}

let clickCelsius = document.querySelector("#celsius");
clickCelsius.addEventListener("click", convertCelsius);

function convertFahrenheit(event) {
  event.preventDefault();
  let fahrenheitDegrees = document.querySelector("#daytemperature");
  fahrenheitDegrees.innerHTML = 59;
}

let clickFahrenheit = document.querySelector("#fahrenheit");
clickFahrenheit.addEventListener("click", convertFahrenheit);
