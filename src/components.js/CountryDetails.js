import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountry(data);
      });
  }, [id]);

  return (
    <div className="col-7">
      {country && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={`${country.name.common} Flag`}
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              {country.borders.length > 0 && (
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((code) => {
                        return (
                          <li key={code}>
                            <Link to={`/${code}`}>{code}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
export default CountryDetails;
