import { Link, useParams } from 'react-router-dom';
import countries from '../countries.json';


function CountryDetails(props) {
  const { alpha3Code } = useParams();  
  const foundCountry = getCountryNameFromCode(alpha3Code);

  function getCountryNameFromCode(alpha3Code){
      return props.countries.find(
          (country) => country.alpha3Code === alpha3Code
      );
  }

  return (
    <div className="col-7">
      <div className="d-flex">
          <img
            
            src={`https://www.flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            style={{ width: '55px', height: '55px', marginRight: '1rem'}}
            alt=""
          />  <h1>{ foundCountry.name.common }</h1>  
          
      </div>
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
              {foundCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Region</td>
            <td>
              {foundCountry.region} 
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((abbreviation) => {
                  return (
                    <Link key={abbreviation} to={`/${abbreviation}`}>
                      <li>
                        {
                          countries.find(
                            (country) => country.alpha3Code === abbreviation
                          ).name.common
                        }
                      </li>
                    </Link>
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