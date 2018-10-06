import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class CountryListItem extends Component {


	handleClick = (e) => {
		this.props.onCountryClick(this.props.id)
	}
	
	render() {
		
		let { flag, id, name } = this.props;

		return (
			<li className="country-item" onClick={e => this.handleClick(e)}>
				<Link to={id}>
					<p>{flag}</p>
					<p>{name}</p>
				</Link> 
			</li>
		)
	}
}