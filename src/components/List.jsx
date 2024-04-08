import {useState} from 'react';
import { Link } from 'react-router-dom';

function List({ countries }) {
    const [hoveredCountryCode, setHoveredCountryCode] = useState(null);
  
    return (
        <>
      <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries.map(country => (
            <Link
              key={country.alpha3Code}
              className={`list-group-item list-group-item-action ${hoveredCountryCode === country.alpha3Code ? 'active' : ''}`}
              to={`/${country.alpha3Code}`}
              onMouseEnter={() => setHoveredCountryCode(country.alpha3Code)}
              onMouseLeave={() => setHoveredCountryCode(null)}
            >
              <img 
                src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`} 
                alt={`Flag of ${country.name.common}`} 
                style={{ width: '1.5rem', height: '1.5rem' }}
              />
              {country.name.common} ({country.alpha3Code})
            </Link>
          ))}
        </div>
      </div>
      </>
    );
  }
  

export default List;
