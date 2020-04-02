import React from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';

const CountryDetail = (props) => {
	const getCountry = (cca3) => countries.find((obj) => obj.cca3 === cca3);

	const { params } = props.match;
	const foundCountry = getCountry(params.cca3);

	console.log(foundCountry);
	return (
		<div>
			<h1>{foundCountry.name.common}</h1>
			<hr />

			{foundCountry.capital.map((elem) => {
				return (
					<p>
						<b>Capital </b>
						{elem}
					</p>
				);
			})}
			<hr />
			<p>
				<b>Area</b> {foundCountry.area} km<sup>2</sup>
			</p>
			<hr />
			<p>Borders: </p>
			<ul>
				{foundCountry.borders.map((elem, index) => {
					console.log(elem.cca3);
					return (
						<li>
							<Link to={`/${elem}`} key={index}>
								{countries.map((country) => {
									if (country.cca3 === elem) {
										return country.name.common;
									}
									return;
								})}
							</Link>
						</li>
                    );
				})}
			</ul>
		</div>
	);
};

export default CountryDetail;
