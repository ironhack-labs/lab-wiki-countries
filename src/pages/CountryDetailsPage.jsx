import { useEffect, useState } from "react";
import "./CountryDetailsPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [countryData, setCountryData] = useState({});

  const { countryId } = useParams();

  console.log("country:", countryData);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((result) => {
        console.log("Data:", result.data);
        setCountryData(result.data);
      });
  }, [countryId]);

  if (!countryData._id) {
    return (
      <div id="CountryDetails">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div id="CountryDetails">
      <span className="page-title">Country Details</span>
      <article className="country-data">
        <h1>{countryData.name.common}</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">Capital</div>
            <div className="col-6">{countryData.capital[0]}</div>
          </div>
          <div className="row">
            <div className="col-6">Area</div>
            <div className="col-6">
              {countryData.area} km<sup>2</sup>
            </div>
          </div>
          <div className="row">
            <div className="col-6">Borders</div>
            <div className="col-6">
              <ul>
                {countryData.borders.map((countryBorder) => {
                  return (
                    <li key={countryBorder}>
                      <Link to={"/" + countryBorder}>{countryBorder}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CountryDetails;
