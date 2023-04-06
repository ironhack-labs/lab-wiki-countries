import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = (props) => {
  const { alpha3Code } = useParams();

  // before bonus
  //   const details = props.countries.find((country) => {
  //     return country.alpha3Code === alpha3Code;
  //   });

  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((response) => {
        // console.log(response);
        setDetails(response.data);
      })
      .catch((error) => console.error(error));
  }, [alpha3Code]);

  const renderDetails = (details) => {
    return (
      <div>
        <h1>{details.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{details.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {details.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {details.borders.length > 0 ? (
                  renderBorder()
                ) : (
                  <p>{details.name.common} has got no borders!</p>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const renderBorder = () => {
    return (
      <ul>
        {details.borders.map((border) => {
          return (
            <li key={border}>
              <Link to={'/' + border}>{border}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="col-7">
      {details ? renderDetails(details) : <h1>…loading</h1>}
    </div>
  );
};

export default CountryDetails;
