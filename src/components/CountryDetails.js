import { Link, useParams } from 'react-router-dom';

function CountriesDetails({ countries }) {
  const { countryId } = useParams();

  const countryDetails = countries.find(
    (country) => country.alpha3Code === countryId
  );

  const borderCountries =
    countryDetails.borders !== []
      ? countries.filter((country) =>
          countryDetails.borders.includes(country.alpha3Code)
        )
      : [];

  const inlineStyle = {
    width: '30%',
  };
  return (
    <div className="col-7">
      <h1>{countryDetails.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={inlineStyle}>Capital</td>
            <td>{countryDetails.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetails.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderCountries.map((country) => (
                  <li>
                    <Link
                      key={country.alpha3Code}
                      to={`/${country.alpha3Code}`}
                    >
                      {country.name.common}
                    </Link>{' '}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default CountriesDetails;
