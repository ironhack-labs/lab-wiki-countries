/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function CountriesList( { countries } ) {
	console.log( 'contries[0] :>> ', countries[0] );
	return (
		<div className="col-5" style={{ MaxHeight: '90vh', overflow: scroll }}>
			<div className="list-group">
				{ countries.map( ( country ) => {
					return <Link
						className="list-group-item list-group-item-action"
						style={{ textAlign: 'left' }}
						to={'/' + country.alpha3Code}
						key={country.alpha3Code}
					>
						<img
							src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
							alt={country.alpha2Code}
							style={{ height: '15px', marginRight: '10px' }}
						/>
						{country.name.common}
					</Link>;
				} )}
			</div>
		</div>
	);
}

export default CountriesList;
