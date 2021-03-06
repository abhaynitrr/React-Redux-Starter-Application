import { FETCH_WEATHER } from '../actions/index';

export default function GetWeatherData(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			if (!action.error) return [action.payload.data, ...state];
	}
	return state;
}
