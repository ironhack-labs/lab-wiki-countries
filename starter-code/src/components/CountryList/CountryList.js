import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {
	return (
		<div className='list-group overflow-auto'>
			{countries.map((country, index) => (
				<Link
					key={index}
					to={`/country/${country.cca3}`}
					className='list-group-item list-group-item-action country-row'
				>
					<div className='country-img'>
						<img
							src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
							alt={country.name.official}
						/>
					</div>
					<div className='country-name'>
						<p>{country.name.official}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default CountryList;
