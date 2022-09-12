import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <ul className='countries-list'>
      {props.countries.map(country => { return (
        <li key={country.alpha3Code} className='countries-list-entry'>
          <img alt={country.alpha2Code + ' flag'}
               src={'https://flagpedia.net/data/flags/icon/72x54/'
                    + country.alpha2Code.toLowerCase() + '.png'}/>
          <Link to={'/countries/' + country.alpha3Code}>{country.name.common}</Link>
        </li>);})
      }
    </ul>
  );
}

export default CountriesList;
