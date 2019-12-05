import React, { Component } from 'react';
import countries from '../countries.json'
import Styled from "styled-components"

const CountryDetails = Styled.div`
backgroundColor: "blue"
`

export default class Detail extends Component {
	state = {
		country: {}
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.onRouteChanged()
		}
	}
	onRouteChanged = () => {
		const country = countries.find(
			country => country.cca3 === this.props.match.params.cca3
		)
		this.setState({ country })
	}


	render() {
		const { country } = this.state
		return (
			<CountryDetails>

				<p>Capital: {country.capital}</p>
				<p>Area: {country.area}</p>
				<p> {country.flag}{country.name.common}</p>

				<p>Border: {country.border}</p>

			</CountryDetails>
		)
	}
}




