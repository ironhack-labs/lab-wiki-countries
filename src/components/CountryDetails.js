import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CountriesDetails.css';

function CountryDetails(props) {
  const { alpha3Code } = useParams();

  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((response) => {
        console.log(response.data);
        setCountryDetails(response.data);
      })
      .catch((e) => console.log('error getting characters from API', e));
  }, [alpha3Code]);

  const getName = (countrycode) => {
    const countryName = props.countries.filter((country) => {
      return countrycode === country.alpha3Code;
    });
    return countryName[0].name.common;
  };

  const detailsStyle = {
    width: '30%',
  };
  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code&&countryDetails.alpha2Code.toLowerCase()}.png`}
        alt={countryDetails.name&&countryDetails.name.common}
      />{' '}
      <br />
      <h1>{countryDetails.name && countryDetails.name.common}</h1>
      <table className="table table-sm">
        <thead></thead>
        <tbody>
          <tr>
            <td style={detailsStyle}>Capital</td>
            <td>{countryDetails.capital && countryDetails.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetails.area && countryDetails.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="list-border">
                {countryDetails.borders &&
                  countryDetails.borders.map((border) => {
                    return (
                      <li>
                        <Link to={`\${border}`}>{getName(border)}</Link>
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
