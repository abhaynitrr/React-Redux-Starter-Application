import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';


//* Application state now contains props like, weather *//
const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;
