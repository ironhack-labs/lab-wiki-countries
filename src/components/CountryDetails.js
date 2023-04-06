import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();
  const findCountry = (countryCode) => {
    const countryIndex = countries.findIndex((element) => {
      return element.alpha3Code === countryCode;
    });
    return countryIndex;
  };
  useEffect(() => {
    const countryIndex = findCountry(countryId);
    console.log(countryIndex);
    if (countryIndex >= 0) {
      setCountry(countries[countryIndex]);
    }
    //eslint-disable-next-line
  }, [countryId, countries]);
  const displayCountry = () => {
    return (
      <>
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>{'Capital'}</td>

              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} Km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {country.borders.length > 0 ? (
                  <ul>
                    {country.borders.map((neighbor) => {
                      const countryIndex = findCountry(neighbor);
                      const neighborObj = countries[countryIndex];
                      return (
                        <li>
                          <Link to={'/countries/'}>
                            {neighborObj.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>None</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className="col-7">{country ? displayCountry() : <p>not found</p>}</div>
  );
}

export default CountryDetails;
