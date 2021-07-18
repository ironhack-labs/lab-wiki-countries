import { Link } from 'react-router-dom';

export default function CountriesList(props) {

    const {allCountries} = props;

    return <div className="scrollbar">
          
          <ul>

          {allCountries.map((country) => {

            return <li style={{"listStyleType": "none"}}>

                <Link to={`/CountryDetails/${country.name.common}`} style={{"textDecoration": "none"}}>{country.flag} {country.name.common}</Link>
            
            </li>

          })}
    
            
        </ul>

    </div>
}

