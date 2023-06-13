import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountryDetailsAPI() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${id}`
      );
      setCountry(response.data);
    };
    getData();
  }, [id]);

  const displayBorders = () => {
    return country && country.borders ? (
      country.borders.map((border) => {
        console.log(border);
        return (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        );
      })
    ) : (
      <p>No borders</p>
    );
  };

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/normal/${country?.alpha2Code.toLowerCase()}.png`}
        alt={country?.name.common}
        style={{ width: '18rem' }}
      />
      <h1>{country?.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country?.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country?.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{displayBorders()}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetailsAPI;
