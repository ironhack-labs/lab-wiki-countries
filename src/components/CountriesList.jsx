import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  

  const renderCountries = () => {
    return countries.map((country) => {
      console.log(country)
      return (
        <div key={`${country.alpha3Code}`} className="country-list">
          <img
            src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png
            `}
            alt="Flag"
          />
          <Link to={`/countries/${country.alpha3Code}`}>
            {country.name.common}
          </Link>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>hello</h1>
      {renderCountries()}
    </div>
  );
}

export default CountriesList;
