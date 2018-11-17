import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchtext: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

		//* setting up some default cities *//
		this.props.fetchWeather('Hyderabad');
		this.props.fetchWeather('Bangalore');
	}

	render() {
		return (
			<form
				onSubmit={this.onFormSubmit}
				className="form-horizontal search-bar"
			>
				<div className="form-group has-success has-feedback search-input-box">
					<div className="col-md-6 CENTER-ALIGN">
						<div className="col-md-9">
							<input
								type="text"
								className="form-control"
								placeholder="Get five day forecast in your favorite cities"
								name="search"
								value={this.state.searchtext}
								onChange={this.onInputChange}
							/>
							<span className="glyphicon glyphicon-search form-control-feedback" />
						</div>
						<div className="col-md-3">
							<button
								type="submit"
								className="btn btn-success CENTER-ALIGN"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		);
	}

	onInputChange(event) {
		this.setState({ searchtext: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		if (this.state.searchtext != '')
			this.props.fetchWeather(this.state.searchtext);
		this.setState({ searchtext: '' });
	}
}

function BindDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(
	null,
	BindDispatchToProps
)(SearchBar);
