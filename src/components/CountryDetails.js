import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState({});
  const [state, setState] = useState(true);

  const { countryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      const data = await response.json();
      setCountry(data);
      setState(false);
    };
    fetchData();
  }, [countryId]);

  return (
    <>
      {!state && (
        <div className="col-7 text-center mg-auto">
          <img
            style={{ width: '10vw' }}
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <h1>{country.name.common}</h1>
          <table className="table text-center">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital}</td>
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
                    {country.borders.map((border) => {
                      return (
                        <li key={border}>
                          <Link to={`/${border}`}>
                            {
                              countries.find((countryBorders) => {
                                return countryBorders.alpha3Code === border;
                              }).name.common
                            }
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
      )}
    </>
  );
};
