import WeatherService from "../services/weather-service.js";
import store from "../store.js";

function drawWeather() {

  document.getElementById("weather").innerHTML = store.State.weather.Template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
