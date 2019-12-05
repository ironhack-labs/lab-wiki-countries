import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';

class CountryDetail extends Component {
	state = {
		country: {},
		borders: []
	};

	componentDidMount() {
		const country = countries.find((country) => country.cca3 === this.props.match.params.cca3);
		const borders = country.borders.map((border) => {
			return countries.find((country) => country.cca3 === border);
		});
		this.setState({ country, borders });
	}

	componentDidUpdate() {
		if (this.props.match.params.cca3 !== this.state.country.cca3) {
			const country = countries.find((country) => country.cca3 === this.props.match.params.cca3);
			const borders = country.borders.map((border) => {
				return countries.find((country) => country.cca3 === border);
			});
			this.setState({ country, borders });
		}
	}

	render() {
		const { country, borders } = this.state;
		const { name, capital, area } = country;
		return (
			<ul className='list-group list-group-flush'>
				<li className='list-group-item countryName'>
					<h2>{!name ? '' : name.official}</h2>
				</li>
				<li className='list-group-item countryCapital'>
					<div className='row'>
						<b className='col-3'>
							<p>Capital: </p>
						</b>
						<p className='col-9'>{!capital ? '' : [ capital ]}</p>
					</div>
				</li>
				<li className='list-group-item countryArea'>
					<div className='row'>
						<b className='col-3'>
							<p>Area: </p>
						</b>
						<p className='col-9'>{!area ? '' : area} km2</p>
					</div>
				</li>
				<li className='list-group-item countryBorders'>
					<div className='row'>
						<b className='col-5'>
							<p>Borders: </p>
						</b>
						<ul className='col-7'>
							{borders.map((border, index) => (
								<Link key={index} to={`/country/${border.cca3}`}>
									<li>{border.name.official}</li>
								</Link>
							))}
						</ul>
					</div>
				</li>
			</ul>
		);
	}
}

export default CountryDetail;
