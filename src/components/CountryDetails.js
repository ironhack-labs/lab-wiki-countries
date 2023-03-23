import { Link } from 'react-router-dom';
import countries from '../countries.json';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { alpha3Code } = useParams();

  function selectCountry(alpha3Code) {
    return props.countries.find((currentCountry) => {
      return currentCountry.alpha3Code === alpha3Code;
    });
  }
  let foundCountry = selectCountry(alpha3Code);

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt="countryFlag"
      />
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            {foundCountry.capital.map((currentCapital) => {
              return <td key={currentCapital}>{currentCapital}</td>;
            })}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul style={{listStyle:"none"}}>
                {foundCountry.borders.map((currentBorders) => {
                  return (
                    <li key={currentBorders}>
                      <Link to={`/${currentBorders}`}>
                        {selectCountry(currentBorders).name.common}
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
  );
}
export default CountryDetails;
