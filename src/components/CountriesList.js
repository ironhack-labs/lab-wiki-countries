/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList( { countries } ) {
	const [renderedCountries, updateRenderedCountries] = useState( [] );
	useEffect( () => {
		updateRenderedCountries( countries );
	}, [countries] );

	return (
		<div className="col-5" style={{ MaxHeight: '90vh', overflow: scroll }}>
			<div className="list-group">
				{ renderedCountries.map( ( country ) => {
					return <Link
						className="list-group-item list-group-item-action"
						style={{ textAlign: 'left' }}
						to={country.alpha3Code}
						key={country.alpha3Code}
					>
						{country.name.official}
					</Link>;
				} )}
			</div>
		</div>
	);
}

export default CountriesList;
