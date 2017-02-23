import axios from 'axios';

const ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast'
const API_KEY = 'af27d5de5045debe3c21f6e99193030c';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ENDPOINT}?q=${city},us&appid=${API_KEY}`;
	const request = axios.get(url);

	// ReduxPromise applies,
	// replaces promise in payload with successfully fetched data
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}