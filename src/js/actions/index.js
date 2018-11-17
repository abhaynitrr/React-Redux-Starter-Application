import axios from 'axios';

const API_KEY = '627ce13694111aecd0870c8eeba67234';
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	let url = `${API_URL}&q=${city},IN`;

	let promise = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: promise
	};
}
