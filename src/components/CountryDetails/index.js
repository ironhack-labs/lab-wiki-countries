import { useParams, Link } from 'react-router-dom';

export default function CountryDetails({ countries }) {
  const { id } = useParams();
  const country = countries.find((country) => country.alpha3Code === id);

  if (!country) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
              <h4 className="alert-heading">Selecciona un país</h4>
              <p>
                <strong> {id} </strong>
              </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-7 mt-4">
      <div className="col-md-12 mt-4">
        <img
          src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
          alt={country.name.common}
          style={{ width: '100%' }}
        />
      </div>
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders:</td>
            <td>
              {country.borders.map((border) => {
                return (
                  <ul>
                    <li>
                      <Link key={border} to={`/countries/${border}`}>
                        {border}
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
