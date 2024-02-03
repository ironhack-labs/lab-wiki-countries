import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const { alpha3 } = useParams();
  const [oneCountryData, setOneCountryData] = useState([]);

  //   console.log(alpha3);

  useEffect(() => {
    console.log("mount");
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3}`)
      .then((result) => {
        console.log(result.data);
        setOneCountryData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [alpha3]);

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
      {oneCountryData.length === 0 && <p>Loading Data..</p>}
      {oneCountryData.length !== 0 && (
        <div className="country-container">
          <div className="country-data">
            <img
              src={` https://flagpedia.net/data/flags/icon/72x54/${oneCountryData.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            <h4>{oneCountryData.name.common}</h4>
            <p>
              <span className="label">Capital</span>:{" "}
              {oneCountryData.capital[0]}
            </p>
            <p>
              <span className="label">Area:</span> {oneCountryData.area}km²
            </p>
          </div>
          <div className="borders">
            <p>Borders:</p>
            {oneCountryData.borders.map((border) => {
              return (
                <Link
                  key={border}
                  to={`/${border}`}
                  style={{ textDecoration: "none" }}
                >
                  <p className="borderP"> {border} </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
