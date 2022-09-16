import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'

const CountryDetails = ({countries}) => {
  const { id } = useParams();

  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);

  const getOneCountry = async () => {
    try {
      const {data} = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      setCountry(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getOneCountry()
  }, [id]);

  return !loading ? (
    <div className="col-7">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
      <h1>{country.name.official}</h1>
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
              {country.area} KM
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/${border}`}>
                        {
                          countries.find(
                            (country) => country.alpha3Code === border
                          ).name.official
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
  ) : (
    <div>Loading...</div>
  );
};

export default CountryDetails;