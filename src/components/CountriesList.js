import { Link } from 'react-router-dom';

function CountriesList(props) {
  

  return (
    <div>
      {props.countriesArr.map((countryDetails) => {
        return (
          <ul>
            <li> Country name: {countryDetails.name.common}</li>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}/>
            <Link to={`/CountryDetails/${countryDetails.alpha3Code}`}>
              Press for details
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default CountriesList;
