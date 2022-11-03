import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { country } = useParams();

  const [eachCountry, setEachCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("se esta cargando")
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${country}`)
      .then((response) => {
        console.log(response);
        setEachCountry(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [country]);

  if (loading === true) {
    return <p>Estoy cargando el país</p>;
  }

  const styleDetails = {
    width: "30%"
  }

  return (
    <div className="col-7">
      <h1>{eachCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={styleDetails}>Capital</td>
            <td>{eachCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {eachCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {eachCountry.borders.map((eachBorder) => {
                    return (
                        <li key={eachBorder}>
                            <Link to={`/${eachBorder}`}>{eachBorder}</Link>
                        </li>
                    )
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
