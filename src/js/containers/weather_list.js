import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sparkchart from '../components/spark_chart';
import GoogleMap from '../components/google_map';

class CityWeatherList extends Component {
	constructor(props) {
		super(props);
	}

	renderWeatherList(cityData) {
		let name = cityData.city.name;
		let temps = cityData.list.map(weather => weather.main.temp);
		let pressures = cityData.list.map(weather => weather.main.pressure);
		let humidities = cityData.list.map(weather => weather.main.humidity);
		let { lat, lon } = cityData.city.coord;

		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
				</td>
				<td>
					<Sparkchart
						height={70}
						width={120}
						color="orange"
						data={temps}
					/>
				</td>
				<td>
					<Sparkchart
						height={70}
						width={120}
						color="blue"
						data={pressures}
					/>
				</td>
				<td>
					<Sparkchart
						height={70}
						width={120}
						color="green"
						data={humidities}
					/>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeatherList)}</tbody>
			</table>
		);
	}
}

function BindStateToProps({ weather }) {
	return { weather: weather };
}

export default connect(BindStateToProps)(CityWeatherList);
