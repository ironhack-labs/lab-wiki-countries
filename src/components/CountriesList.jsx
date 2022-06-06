

import { Link } from 'react-router-dom';

const CountriesList = (props) => {

  return (
    <div>
    <h1>Country List</h1>
        <ul>
            {props.countries.map((country) => 
            <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
            
            <span>{country.name.common}</span>
           
            </Link>
            </li>
            )}
        </ul>
    </div>
)
}

export default CountriesList;