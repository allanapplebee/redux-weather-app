import axios from 'axios';

const API_KEY = 'dc58d7fe42829e7c5ae76ac3c5ba8c6a';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
    //redux promise intercepts the payload and waits for the proise to resole
    //before passing it on to the reducer
  };
}
