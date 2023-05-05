/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails( { countries } ) {
	const { countryAlpha3 } = useParams();
	const [renderedDetails, updateRenderedDetails] = useState( null );

	useEffect( () => {
		const result = countries.find( ( country ) => countryAlpha3 === country.alpha3Code );
		if ( result ) updateRenderedDetails( result );
	}, [countryAlpha3] );

	// FIXME: unfinished
	function getCountryName( alpha3 ) {
		countries.forEach( ( country ) => {
			if ( country.alpha3Code === alpha3 ) return country.name.common;
		} );
	}

	return (
		<div className="col-7" style={{ textAlign: 'left' }}>
			{ renderedDetails &&
			<>
				<h1>{renderedDetails.name.common}</h1>
				<table className="table">
					<thead></thead>
					<tbody>
						<tr>
							<td style={{ width: '30%' }}>Capital</td>
							<td>{renderedDetails.capital[0]}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>{renderedDetails.area} km<sup>2</sup></td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								<ul>
									{renderedDetails.borders && renderedDetails.borders.map( ( item ) => {
										return (
											<li key={item}>
												<Link to={'/' + item}>{ item }</Link>
												{/* FIXME: unfinished */}
												{/* <Link to={'/' + item}>{getCountryName( item )}</Link> */}
											</li>
										);
									} )}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</>
			}
		</div>
	);
}

export default CountryDetails;
