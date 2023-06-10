import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const country = countries.find((country) => country.alpha3Code === id);

  if (!country) {
    return <div>Country not found!</div>;
  }

  const { common, official, native } = country.name;
  const borderCountries = country.borders;

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt="flag"
      />
      <h1>{common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{official}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderCountries.map((border) => {
                  const borderCountry = countries.find(
                    (country) => country.alpha3Code === border
                  );
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{borderCountry.name.common}</Link>
                    </li>
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

export default CountryDetails;
