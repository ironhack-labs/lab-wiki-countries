import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const [loaded, setLoaded] = useState(false);
  const [countryDetails, setCountryDetails] = useState({});
  const { countryCode } = useParams();
  useEffect(() => {
    async function getCountryDetails() {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${countryCode}`
      );
      const data = await response.json();
      setCountryDetails(data);
      setLoaded(true);
      console.log(data);
    }
    getCountryDetails();
  }, [countryCode]);

  return (
    <div className="details">
      {!loaded && <h1>Loading</h1>}
      {loaded && (
        <>
          <h2 style={{ fontSize: "24px", paddingBottom: "30px" }}>
            Country Details
          </h2>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <h2 style={{ fontSize: "24px", paddingBottom: "20px" }}>
            {countryDetails.name.common}
          </h2>
          <div className="details-fields border-row">
            <div className="border-row">
              <div className="col-25">
                <label>Capital</label>
              </div>
              <div className="col-75">
                <span>{countryDetails.capital[0]}</span>
              </div>
            </div>

            <div className="border-row">
              <div className="col-25">
                <label>Area</label>
              </div>
              <div className="col-75">
                <span>{countryDetails.area} km ²</span>
              </div>
            </div>

            <div className="border-row">
              <div className="col-25">
                <label>Borders</label>
              </div>
              <div className="col-75">
                {countryDetails.borders.map((border, index) => {
                  return (
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/countryDetails/${border}`}
                      key={index}
                    >
                      <span className="details-border">{border}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
