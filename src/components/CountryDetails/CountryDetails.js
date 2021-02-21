
import countries from '../../countries.json';
import { useParams, Link } from 'react-router-dom';

// custonhook params
// countries.find(country => country.cca3 === countryId)

export function CountryDetails() {


  const params = useParams();

  const countryRender = countries.find(
    (oneCountry) => oneCountry.cca3 === params.countryId
  );

  return (
    <div className="col-7">
      <h1>{countryRender.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countryRender.capital}</td>
          </tr>
          <tr>
            <td>Area:</td>
            <td>
              {countryRender.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryRender.borders.map((item) => {
                    const borderCountry = countries.find(
                      (oneCountry) => oneCountry.cca3 === item
                    );
                  return (
                    <Link  key={item} to={`${item}`}>
                      <li>{borderCountry.name.official}</li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
