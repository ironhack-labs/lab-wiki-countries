import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + id)
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch((e) => console.log('error getting countries from API', e));
  }, []);

  return (
    <div className="col-7">
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
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
