import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = () => {
  const { id } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((res) => res.json())
      .then((json) => setCountryData(json))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="col-7">
      {countryData ? (
        <div>
          <img
            className="main-image"
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
          ></img>
          <h1>{countryData.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryData.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryData.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryData.borders.map((element) => {
                      return (
                        <li>
                          <Link to={`/${element}`}>{element}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
