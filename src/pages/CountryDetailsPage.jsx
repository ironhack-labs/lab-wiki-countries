import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetailsPage() {
  const [details, setDetails] = useState(null);
  const params = useParams();
  const mayusLetters = params.countryId.toUpperCase();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${mayusLetters}`
      );
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (details === null) {
    return <h3>...buscando detalles</h3>;
  }
  console.log(details);
  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <h1>{details.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{details.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{details.borders.map((eachBorder) => {
                return (
                <li key={eachBorder}>
                  <a href={`/${eachBorder}`}>{eachBorder}</a>
                </li>

                )
              })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetailsPage;
