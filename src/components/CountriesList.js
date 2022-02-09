import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
	return (
    
      <div className="col-4" style={{ maxheight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries.map((country) => {      
              
            return (
              <Link
                key={country.alpha3Code}
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-action "
              >
                <img 
                  key={country.alpha2Code.toLowerCase()} value={country}
                  src={`https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code).toLowerCase()}.png`}
                  style={{ width: '25px', marginRight: '.7rem' }}
                  alt= {country.name.common}
                  />  
                 {country.name.common}  
              </Link>
            );
          })}
        </div>
      </div>
    
  );
}

export default CountriesList;