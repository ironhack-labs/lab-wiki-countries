import './CountriesList.css';
import {Link} from 'react-router-dom';


function CountriesList(props){

	return(
		<div className="countries-list">

			{props.allCountries.map((country, index)=> {

				const {official} = country.name
				return (
					<Link to= {`/${country.cca3}`}>
						<div key={index} className="country-item card">
							<div>{country.flag} </div>
							<div className="country-name">{official}</div>
						</div>
					</Link>
				)
			})}
		</div>
	);
}

export default CountriesList;