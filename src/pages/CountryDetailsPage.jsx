import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountryDetailsPage() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);
  console.log("this is the id--->>", alpha3Code );
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        setCountry(response.data);
      });
  }, [alpha3Code]);

  return (
    <div className="d-flex justify-content-center">
      {}
      {country && (
        <div>
          <h1 className="p-4">{country.name.common}</h1>
          <table className="table table-striped-columns " style={{width:"850px", border: "1px solid black"}}>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{country.area} km2</td>
              </tr>
              {country.borders.length > 0 && <tr>
                <td>Borders:</td>
                <td>
                  {" "}
                  <ul>
                    {country.borders.map((country) => (
                      <li key={country}>
                        <p>
                          {" "}
                          <Link to={`/${country}`}>{country}</Link>
                        </p>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>}
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetailsPage;
