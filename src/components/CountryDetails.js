import { useParams, Link } from "react-router-dom";
import countries from '../countries.json';

function CountryDetails(props) {

  const {alpha3Code} = useParams();

  const country = countries.find((country) => {
    return country.alpha3Code === alpha3Code;
  })

  return (
    <div className="col-7">
      {country && country.name && (
        <div>
          <h1>{country.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area}
                <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {country.borders.map((border) => {
                    const theCountry = countries.find((country) => country.alpha3Code === border);
                    return (                  
                      <li key={border}>
                        <Link to={`/${theCountry.alpha3Code}`}>{theCountry.name.common}</Link>
                      </li>
                    );
                  })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
