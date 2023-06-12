import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      <h2>Lists of Countries</h2>

      <div>
        {countries.map((country) => {
          return (
            <div className="row mt-4">
              <Link to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="foto-pais"
                ></img>
              </Link>

              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
