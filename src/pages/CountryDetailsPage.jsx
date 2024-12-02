import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetailsPage() {
  const [country, setCountry] = useState();
  const { alpha3Code } = useParams();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        setCountry(response.data);
        setFetching(false);
      });
  }, [alpha3Code]);
  console.log(country);

  //  if(fetching) {
  //   return <p>Loading...</p>
  //  }
  //  if(!country){
  //   return <p>Country not found</p>
  //  }

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      {
        fetching ? <p>Loading</p> : null
      }

      {
        
      }

      {fetching ? (
        <p>Loading</p>
      ) : (
        <div>
          {" "}
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="{`{country.name.common} flag`}"
            style={{ display: "block", margin: "0 auto 20px auto" }}
          ></img>
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders && country.borders.length > 0 ? (
                      country.borders.map((border) => (
                        <li key={border}>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      ))
                    ) : (
                      <li>No borders</li>
                    )}
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

export default CountryDetailsPage;
