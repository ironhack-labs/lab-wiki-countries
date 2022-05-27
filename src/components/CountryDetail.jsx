import { Link, useParams } from 'react-router-dom';

function CountryDetail(props) {
  const { countries } = props;

  const { countryId } = useParams();
  console.log(countryId);

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === countryId;
  });

  return (
    <div>
      <h1>Country Details</h1>
      {!foundCountry && <h2>No country found!</h2>}

      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt={foundCountry.name.common}
          />
          <h2>{foundCountry.name.common}</h2>
          <p>Capital: {foundCountry.capital[0]}</p>
          <p>{foundCountry.description}</p>
          <Link to="/">{foundCountry.borders}</Link>
        </>
      )}

      <Link to="/projects">Back</Link>
    </div>
  );
}

export default CountryDetail;

{/* <div class="col-7">
  <h1>{foundCountry.name.common}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{foundCountry.capital[0]}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>
          {foundCountry.area}
          <sup>2</sup>
        </td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            {foundCountry.border.map((country) => {
              <li>
                <Link>{country}</Link>
              </li>;
            })}
            <li>
              <a href="/AND">Andorra</a>
            </li>
            <li>
              <a href="/BEL">Belgium</a>
            </li>
            <li>
              <a href="/DEU">Germany</a>
            </li>
            <li>
              <a href="/ITA">Italy</a>
            </li>
            <li>
              <a href="/LUX">Luxembourg</a>
            </li>
            <li>
              <a href="/MCO">Monaco</a>
            </li>
            <li>
              <a href="/ESP">Spain</a>
            </li>
            <li>
              <a href="/CHE">Switzerland</a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>;
 */}