import axios from "axios";
import API_KEY from "../config.js"; // Importa la chiave API dal file config

// Definizione delle costanti per le azioni
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

// Azione per iniziare la richiesta delle previsioni
export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

// Azione per gestire la risposta di successo
export const fetchWeatherSuccess = (weatherData) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weatherData,
  };
};

// Azione per gestire la risposta di errore
export const fetchWeatherFailure = (error) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  };
};

// Azione per ottenere le previsioni meteorologiche da OpenWeatherMap
export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((response) => {
        const weatherData = {
          city: response.data.name,
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
          wind_speed: response.data.wind.speed,
        };
        dispatch(fetchWeatherSuccess(weatherData));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
