import React from 'react';
import './countries-list.scss';
import { NavLink } from 'react-router-dom';

export const CountriesList = ({countries}) => {
	return (
		<div className={'list-group'}>
			{countries.map((country) =>
				<NavLink key={country.cca3}
					  className={'list-group-item list-group-item-action'}
					  to={`/country-details/${country.cca3}`}>
					<span>{country.flag} {country.name.common}</span>
				</NavLink>
			)}
		</div>
	)

};