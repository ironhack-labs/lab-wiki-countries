import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const params = useParams();
  console.log(params.alpha3Code);
  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`
      )
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function displayCountryData() {
    if (!country) return <p>Loading...</p>;
    else {
      const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;
      return (
        <>
          <img src={flagUrl} alt="" />
          <div>{country.name.common}</div>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>
                  <ul className="list-unstyled">
                    {country.capital.map((capitalName) => (
                      <li key={capitalName}>{capitalName}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>{country.area}</td>
              </tr>
              <tr>
                <th scope="row">Borders</th>
                <td>
                  <ul className="list-unstyled">
                    {country.borders.map((borderAlpha3Code) => (
                      <li key={borderAlpha3Code}>
                        <a href={borderAlpha3Code}>{borderAlpha3Code}</a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      );
    }
  }

  return (
    <>
      <h2>Country Details</h2>
      {displayCountryData()}
    </>
  );
}

export default CountryDetails;
