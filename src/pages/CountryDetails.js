import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ allCountries }) => {
  const { id } = useParams();
  const oneCountry = allCountries.filter((country) => country.cca3 === id);
  const currentCountry = oneCountry[0];
  console.log(currentCountry);
  return (
    <div>
      <div className="col-7">
        <h1>{currentCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{currentCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {currentCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {currentCountry.borders.map((borde) => {
                    const borderCountry = allCountries.filter(
                      (country) => country.cca3 === borde
                    );

                    return (
                      <li key={borderCountry[0].cca3}>
                        <Link to={`/countries/${borderCountry[0].cca3}`}>
                          {borderCountry[0].flag} {borderCountry[0].name.common}
                        </Link>{' '}
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDetails;
