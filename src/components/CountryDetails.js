import './CountryDetails.css';
import { Link } from 'react-router-dom';

function CountryDetails (props){
	
	return(
		<div className="country-details">
			<h2>{props.theCountry[0].name.common}</h2>
			<hr></hr>
			<p>Capital:       {props.theCountry[0].capital[0]}</p>
			<hr></hr>
			<p>Area:           {`${props.theCountry[0].area}`}km²</p>
			<hr></hr>
			<div className="borders">
				<ul>Borders</ul>
				{props.borders.map((border, index) => {
					return <Link to={`/${border.cca3}`}> <li key={index}>{border.name.official}</li> </Link>
				})}
			</div>

		</div>
	);
}

export default CountryDetails;