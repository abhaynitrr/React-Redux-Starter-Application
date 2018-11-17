import React, { Component } from 'react';
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine
} from 'react-sparklines';

export default class Sparkchart extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Sparklines
					height={this.props.height}
					data={this.props.data}
				>
					<SparklinesLine color={this.props.color} />
					<SparklinesReferenceLine type="avg" />
				</Sparklines>
			</div>
		);
	}
}
