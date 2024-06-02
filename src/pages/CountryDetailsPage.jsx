import { useEffect, useState } from "react";
import { getCountriesDetails } from "../services/CountryServices";
import { Link, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

function CountryDetails() {
  const { alpha3Code } = useParams();
  //Genero la variable de estado que tendra el elmento que quiero obneter e interactuar
  const [country, seetCountry] = useState(null);
  //Para manejar lo que quiero que haga mientras obtiene los datos
  const [loading, setLoading] = useState(true);

  //useEffect siempre para cuando inicie una busqueda
  useEffect(() => {
    getCountriesDetails(alpha3Code)
      //Aquí entra l o que devuela la petición a la API
      .then((countryAPI) => {
        seetCountry(countryAPI);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [alpha3Code]);

  return (
    <div>
      {loading ? (
        <div className="container d-flex justify-content-center my-5">
          <PacmanLoader color="#C1C1C1" />
        </div>
      ) : (
        <div className="container">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Country Details
          </p>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          />

          <h1>{country?.name.common}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country?.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country?.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border) => (
                      <li key={border}>
                        <Link to={`/countries/${border}`}>{border}</Link>
                      </li>
                    ))}
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
