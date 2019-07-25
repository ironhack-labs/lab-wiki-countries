import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
	const countriesList = () => {
		return props.countries.map((country, i) => {
			return (
				<NavLink
					className="list-group-item list-group-item-action"
					exact
					to={`/country/${country.cca3}`}
					key={i}>
					{country.flag} {country.name.common}
				</NavLink>
			);
		});
	};
	return (
		<div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
			<div className="list-group">{countriesList()}</div>
		</div>
	);
};

export default Navbar;
