import { Link, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CountriesList from './CountriesList';

function CountryDetails() {
  const [detailCountry, setDetailCountry] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const { alpha3Code } = useParams();

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        setDetailCountry(response.data);
        console.log(response.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [alpha3Code]);

  // console.log(detailCountry)
  return (
    <div className="col-7">
      <h1>{detailCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{detailCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {detailCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {detailCountry.borders.map((eachCountry,index) => {
                  return (
                    <li key={index}>
                      {/* <Link to={`${eachCountry}`}>{detailCountry.alpha3Code === {eachCountry} && detailCountry.name.common}</Link> */}
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
