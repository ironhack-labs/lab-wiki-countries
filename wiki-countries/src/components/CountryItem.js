import React, { Component } from "react";

export class CountryItem extends Component {

	
	render() {
		
		let { flag, name } = this.props;

		
		return (
			<li className="country-item">
				<p>{flag}</p>
				<p>{name}</p>
			</li>
		)
	}
}