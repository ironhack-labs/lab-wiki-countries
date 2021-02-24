import { Link } from 'react-router-dom';
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';

const CountryDetails = ({ countryCca3 }) => {
  const getCountry = (cca3) => {
    const { name, capital, area, borders } = countries.find(
      (country) => country.cca3 === cca3
    );
    return { name: name.official, capital: capital[0], area, borders };
  };

  const country = getCountry(countryCca3);

  return (
    <section>
      <h1>{country.name}</h1>
      <hr />
      <div className="row">
        <div className="col-6">Capital</div>
        <div className="col-6">{country.capital}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">Area</div>
        <div className="col-6">
          {country.area} km<sup>2</sup>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-6">Borders</div>
        <div className="col-6">
          <ul>
            {country.borders.map((border) => {
              const borderCountry = getCountry(border);
              return (
                <li>
                  <Link to={`/${border}`}>{borderCountry.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
