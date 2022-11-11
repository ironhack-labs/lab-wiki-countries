import { Link, useParams } from 'react-router-dom';

export function CountryDetails({ countries }) {
  const params = useParams();
  const { id } = params;

  const [clickedCountry] = countries.filter((country) =>
    country.alpha3Code === id ? country : null
  );

  return (
    <div className="col-7">
      <h1>{clickedCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{clickedCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {clickedCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {clickedCountry.borders.map((alpha3Code) => {
                  const [borderCountries] = countries.filter((country) => {
                    return country.alpha3Code === alpha3Code;
                  });

                  return (
                    <li>
                      <Link to={`/${alpha3Code}`}>
                        {borderCountries.name.common}
                      </Link>
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
