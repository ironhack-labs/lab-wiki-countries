import { useParams, Link } from 'react-router-dom';
export default function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === alpha3Code;
  });

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border) => {
                  return (
                    <li key={border}>
                      {<Link to={`/${border}`}>{border}</Link>}
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
