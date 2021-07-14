import { Link } from 'react-router-dom';

const CountryDetails = ({ match, countries }) => {
  const country = countries.find(
    (el) => el.alpha3Code === match.params.alpha3Code
  );
  const borders = [...country.borders];

  return (
    <div className="col-7">
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
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
            {borders.length > 0 && (
              <>
                <td>Borders</td>
                <td>
                  <ul>
                    {borders.map((el) => (
                      <li key={el}>
                        <Link to={el}>{el}</Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
