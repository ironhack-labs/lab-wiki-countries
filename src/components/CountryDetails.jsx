import '../App.css';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Navigate } from 'react-router-dom';
 import { Link } from 'react-router-dom';
 import axios from 'axios';
 import { useEffect, useState } from 'react';

function CountryDetails({countries}) {
  const [country, setCountry] = useState([]);

  const { alpha3Code } = useParams();
  let API_URL;
  if(alpha3Code){
     API_URL = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;
  }

  useEffect(() => {
    if(alpha3Code){
      const getData = async () => {
        const res = await axios.get(API_URL);
        setCountry(res.data);
      };
      getData();
    }
  }, [alpha3Code, API_URL]);

  if (country.alpha2Code) {
    console.log('Si que llega aquí', country);
    return (
      <div className="top">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt="flag"
        />

        <h1>{country.name.official}</h1>

        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Border </td>
              <td>
                <ul>
                  {country.borders.map((border) => (
                    <Link to={`/${border}`}>
                      <li key={alpha3Code + border}>
                        {
                          countries.find(
                            (country) => country.alpha3Code === border
                          ) &&

                          countries.find(
                            (country) => country.alpha3Code === border
                          ).name.official
                        }
                      </li>
                    </Link>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  } else {
    return <></>;
  }

}
export default CountryDetails;
