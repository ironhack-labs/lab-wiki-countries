import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  const listCountries = () => {
    return countries.map((country) => {
      return (
        <Link
          //'/COUNTRY_CODE'
          to={`/${country.alpha3Code}`}
          key={country.alpha3Code}
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          ></img>
          {country.name.common}
        </Link>
      );
    });
  };

  return <div>{listCountries()}</div>;
}
export default CountriesList;
