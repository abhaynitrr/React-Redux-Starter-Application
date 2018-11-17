import '../../css/main.css';

import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CityWeatherList from '../containers/weather_list';

export default class App extends Component {
	render() {
		return (
			<div className="App-Container col-md-12">
				<SearchBar />
				<CityWeatherList />
			</div>
		);
	}
}
