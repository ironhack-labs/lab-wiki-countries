import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  console.log(countries);
  return (
    <div>
      {countries.map((country) => {
        return (
          <div>
            <Link to="/country">{country.alpha3Code}</Link>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
