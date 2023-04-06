import { Link } from 'react-router-dom';


function CountriesList(props) {
  return (
    <div className="countriesList">
      {props.countries.map((countryDetails) => {
        return (
          <div>
            <Link to={`/${countryDetails.alpha3Code}`}>
              {countryDetails.name.common}
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}/>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
