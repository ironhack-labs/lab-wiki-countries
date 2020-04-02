import React from 'react';
import './country-info.scss';
import { NavLink } from 'react-router-dom';

export const CountryInfo = ({country}) => {
	return (
		!!country && <div className={'country-info'}>
			<h1>{country.name.common}</h1>
			<div>
				<span>Capital</span>
				<span>{country.capital[0]}</span>
			</div>
			<div>
				<span>Area</span>
				<span>{country.area} km2</span>
			</div>
			<div>
				<span>Borders</span>
				<ul>
					{country.borders.map((e) =>
					<li key={e.cca3}>
						<NavLink to={`/country-details/${e.cca3}`}>{e.name}</NavLink>
					</li>)}
				</ul>
			</div>
		</div>
	)
};