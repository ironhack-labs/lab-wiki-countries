import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const baseURL = ' https://ih-countries-api.herokuapp.com/countries/';
  const [details, setDetails] = useState('');

  const { alpha3Code } = useParams();

  useEffect(() => {
    axios
      .get(`${baseURL}${alpha3Code}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Name: {details.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: 30 + '%' }}>Capital</td>
            <td>{details.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area} km
              <sup>2</sup>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
