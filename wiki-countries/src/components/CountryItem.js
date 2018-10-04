import React, { Component } from "react";

export class CountryItem extends Component {

	constructor(props){
		super(props)

	}

	handleClick = (e) => {
		this.props.onCountryClick(this.props.id)
	}
	
	render() {
		
		let { flag, name, id } = this.props;

		
		return (
			<li className="country-item" onClick={e => this.handleClick(e)}>
				<p>{flag}</p>
				<p>{name}</p>
			</li>
		)
	}
}