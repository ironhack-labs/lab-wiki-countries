import React from "react";
import Countries from "./countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const countryID = props.match.params.country;

  const singleCountry = Countries.find(el => el.cca3 === countryID);

  return (
    <div className="col-7">
      <h1>{singleCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{singleCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {singleCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            {
              <td>
                {singleCountry.borders.map(el => {
                  return (
                    <li>
                      <Link to={`/${el}`}>{Countries.find(countrinho => countrinho.cca3 === el).name.common}</Link>
                    </li>
                  );
                })}
              </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
