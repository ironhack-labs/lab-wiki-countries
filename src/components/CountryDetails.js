import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = (props) => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(undefined);

  // const countryObj = props.callbackToGetCountry(alpha3Code);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(response => {
        setCountry(response.data)
      })
      .catch(e => {console.log(e)})
  }, [alpha3Code])

  if (country) {

    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
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
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {props.countriesArr.length > 0
                    ? country.borders.map((border) => {
                      const countryFromBorder = props.callbackGetCountry(border) 
                      // we over-complicated things a bit in the end 
                      // because in the first iterations of the lab we used and needed only this callback
                      // but in the end, to control the flow and lifecycle of the component we had to also pass the entire countries array
                      // which makes the callback pointless because we could directly get the country in this componenet now
                      // but we kept just to practice :)
                      return <li key={border}>
                        <Link to={`/${border}`}>{countryFromBorder.name.common}</Link>
                      </li>;
                    })
                    : <p key="loading-p">Loading borders...</p>}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default CountryDetails;
