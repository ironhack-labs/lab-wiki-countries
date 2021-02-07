import React from 'react';
import {Link} from 'react-router-dom';

export default function CountriesList(props) {
	const countriesList = props.countries.map(country => {
		const {flag, name: {common: countryName}, cca3} = country;
		return (
			<Link className="list-group-item list-group-item-action"
				  to={`/${cca3}`}>{`${flag} ${countryName}`}</Link>
		);
	});

	return (
		<div>
			<div className="col-7" style={{maxHeight: '90vh', overflow: 'scroll'}}>
				<div className="list-group">
					{countriesList}
				</div>
			</div>
		</div>
	);
}