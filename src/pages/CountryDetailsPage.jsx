import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function CountryDetails() {
  const [countryInfo, setCountryInfo] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((country) => {
        console.log(country.data);
        setCountryInfo(country.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryId]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
        {(countryInfo === null || countryInfo === undefined) && (
          <p>...loading</p>
        )}
        {countryInfo && (
          <>
            <h1>{countryInfo.name.common}</h1>

            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>Capital</td>
                  <td>{countryInfo.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryInfo.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {countryInfo.borders.length === 0 && (
                        <p>no bordering countries listed</p>
                      )}
                      {countryInfo.borders.map((oneCountry) => {
                        {
                          console.log("mapping");
                        }
                        return (
                          <li key={oneCountry}>
                            <Link to={`/${oneCountry}`}>{oneCountry}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
