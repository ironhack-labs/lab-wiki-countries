import CountryList from './../countries.json';
import { Link } from 'react-router-dom';


const CountryDetails = (props) => {
  const countryID = props.match.params.ccn3;
  const foundCountry = CountryList.find(
    (country) => country.ccn3 === countryID
  );

  return (
    <div>
      <div style={{margin: 30}}>
        <h1>{foundCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area}km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((border, index) => {
                    return (
                      <li key ={index}>
                        <Link to={`/${foundCountry.ccn3}`}>{border}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  CountryDetails;
