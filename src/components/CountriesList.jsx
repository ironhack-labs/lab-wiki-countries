import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';


function CountriesList({ countries }) {


  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <div key={`${country.alpha3Code}`} className="country-list">
          <img
            src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png
            `}
            alt="Flag"
          />
          <Link to={`/${country.alpha3Code}`}>
            {country.name.common}
          </Link>
        </div>
      );
    });
  };
  return (
    <div>
    
      {renderCountries()}
    </div>
  );
}

export default CountriesList;
