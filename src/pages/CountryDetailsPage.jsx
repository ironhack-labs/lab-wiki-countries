import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetailsPage() {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries/" + countryId)
      .then((response) => {
        setCountryDetails(response.data);
      })
      .catch((e) => {
        console.log("getting error im county details", e);
      });
  }, [countryId]);

  const renderCountry = () => {
    if (countryDetails === null) {
      return <p>loading....</p>;
    }
    return (
      <>
        <h1>{countryDetails.name.common}</h1>
        <img
          src={
            "https://flagpedia.net/data/flags/icon/72x54/" +
            countryDetails.alpha2Code.toLowerCase() +
            ".png"
          }
          alt="flag"
        />
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{countryDetails.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {countryDetails.borders.map((element) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <Link to={`/${element}`}>{element}</Link>
                        </li>
                      </ul>
                    </>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
      {renderCountry()}
    </div>
  );
}

export default CountryDetailsPage;
