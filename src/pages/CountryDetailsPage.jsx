import { useEffect, useState } from "react";
import "./CountryDetailsPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const [countryData, setCountryData] = useState({});

  return (
    <div id="CountryDetails">
      <span className="page-title">Country Details</span>
      <article className="country-data">
        <h1>France</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">Capital</div>
            <div className="col-6">Paris</div>
          </div>
          <div className="row">
            <div className="col-6">Area</div>
            <div className="col-6">
              215235235 km<sup>2</sup>
            </div>
          </div>
          <div className="row">
            <div className="col-6">Borders</div>
            <div className="col-6">
              <ul>
                <li>Belgium</li>
                <li>Portugal</li>
                <li>Italy</li>
                <li>Germany</li>
                <li>Andorra</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CountryDetails;
