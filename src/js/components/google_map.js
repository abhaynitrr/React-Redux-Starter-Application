import React, { Component } from 'react';

export default class GoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 10,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return <div ref="map" />;
	}
}
