import { Link, useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';

function CountryDetails({}) {
    const [ countryDetails, setCountryDetails ] = useState({} );
  
    const { countryId } = useParams();

    useEffect(() => {
        axios
          .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
          .then((response) => {
            setCountryDetails({...countryDetails,borders:response.data.borders,name:response.data.name.common,capital:response.data.capital[0],area:response.data.area,contryId:response.data.alpha3Code})
          })
          .catch((e) => console.log('error', e));
      }, [countryId]);
    
    
      console.log('country detaikls', countryDetails);

      return (
        <div className="col-7">
          <h1>{countryDetails.name}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td className="td-style">Capital</td>
                <td>{countryDetails.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryDetails.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    { countryDetails.borders.map((country) => (
                      <li>
                        <Link to={`/${country}`}>{country}</Link>{' '}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    export default CountryDetails