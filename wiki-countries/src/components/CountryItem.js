import React, { Component } from "react";

export class CountryItem extends Component {


	handleClick = (e) => {
		this.props.onCountryClick(this.props.id)
	}
	
	render() {
		
		let { flag, name } = this.props;
		
		return (
			<li className="country-item" onClick={e => this.handleClick(e)}>
				<p>{flag}</p>
				<p>{name}</p>
			</li>
		)
	}
}