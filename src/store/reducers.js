import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
  } from "./actions";
  
  // Stato iniziale
  const initialState = {
    loading: false,
    weatherData: null,
    error: null,
  };
  
  // Riduttore
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          loading: false,
          weatherData: action.payload,
          error: null,
        };
      case FETCH_WEATHER_FAILURE:
        return {
          ...state,
          loading: false,
          weatherData: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  