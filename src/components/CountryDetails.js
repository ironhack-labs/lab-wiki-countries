import CountryArray from '../countries.json';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const countryparams = useParams();

  const foundCountry = CountryArray.find(
    (element) => element.alpha3Code === countryparams.id
  );
  console.log(foundCountry);

  return (
    <div className="col-7">
      <h1>France</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a to="/AND">Andorra</a>
                </li>
                <li>
                  <a to="/BEL">Belgium</a>
                </li>
                <li>
                  <a to="/DEU">Germany</a>
                </li>
                <li>
                  <a to="/ITA">Italy</a>
                </li>
                <li>
                  <a to="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a to="/MCO">Monaco</a>
                </li>
                <li>
                  <a to="/ESP">Spain</a>
                </li>
                <li>
                  <a to="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
