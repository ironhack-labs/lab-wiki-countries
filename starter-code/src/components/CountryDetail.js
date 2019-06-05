import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries
		};
	}

	componentWillMount() {
		this.setState({
			country: this.state.countries.find((country) => country.cca3 === this.props.match.params.id)
		});
	}

	componentWillUnmount() {
		this.props.update();
	}
	render() {
		//	console.log(this.props);
		return (
			<div>
				<h1>{this.state.country.name.common}</h1>
				<table className="table">
					<thead />
					<tbody>
						<tr>
							<td>Capital</td>
							<td>{this.state.country.capital}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>
								{this.state.country.area} km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								<ul>
									{this.state.country.borders.map((border, i) => {
										return (
											<li key={i}>
												<Link to={`/${border}`}>{border}</Link>
											</li>
										);
									})}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default CountryDetail;
