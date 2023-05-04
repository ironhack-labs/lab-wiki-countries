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
	return (
		<div className="col-7">
			{ renderedDetails &&
			<>
				<h1>{renderedDetails.name.offical}</h1>
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
									{renderedDetails.border && renderedDetails.border.map( ( item ) => {
										return (
											<li key={item}>
												<Link to={item}>{item}</Link>
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
