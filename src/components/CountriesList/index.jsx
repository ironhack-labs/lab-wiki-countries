import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const CountryList = ({ countries }) => {

  return (
    <ul className="list-group" style={{overflow:"scroll", maxHeight:"90vh"}}>
      {countries.map((country, index) => (
        
            <Link to={`/${country.alpha3Code}`}>
            <li className="list-group-item list-group-item-action" key={index}>  
            <img className="rounded img-thumbnail" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common}/>
            <br/>
            {country.name.common}
            </li>
            </Link>
        
      ))}
    </ul>
  );
};

export default CountryList;