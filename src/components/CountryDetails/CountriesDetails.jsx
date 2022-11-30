import { useParams, Link } from 'react-router-dom';
import './CountriesDetails.css';
/* import { useEffect } from 'react'; */

function CountriesDetails({ countries }) {
  /* useEffect(() => {
    axios
      .get(countryApi)
      .then((response) => {
        setCountryInfo(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [countryApi]); */

  /* const countryAlpha3Code = countryCode;
  const countryApi = `https://ih-countries-api.herokuapp.com/countries/${countryAlpha3Code}`; */

  const { countryId } = useParams();

  const getCountryByAlpha3 = (code) =>
    countries.find((elm) => elm.alpha3Code === code);

  const findBorderCountries = (borders) =>
    borders.map((border, idx) => {
      const borderedCountry = getCountryByAlpha3(border);
      return (
        <li>
          <Link to={`/${borderedCountry.alpha3Code}`} key={idx}>
            {borderedCountry.name.common}
          </Link>
        </li>
      );
    });

  const findCountry = getCountryByAlpha3(countryId);

  return (
    <div className="countriesDetails col-6 align-self-center">
      <div className="text-center" id={findCountry._id}>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${findCountry.alpha2Code.toLowerCase()}.png`}
          alt={findCountry.name.official}
        />
        <h3 className="mt-5">{findCountry.name.official}</h3>
      </div>
      <div className="countryInfo mt-5">
        <div>
          <p>Capital</p>
          <p>{findCountry.capital}</p>
        </div>
        <hr />
        <div>
          <p>Area</p>
          <p>
            {findCountry.area} km<sup>2</sup>
          </p>
        </div>
        <hr />
        <div>
          <p>Borders</p>
          <div className="borders">
            <ul>{findBorderCountries(findCountry.borders)}</ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default CountriesDetails;
