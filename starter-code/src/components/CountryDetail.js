import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export default function CountryDetail(props) {
  const cca3 = props.match.params.cca3;
  const current = countries.find((country) => country.cca3 === cca3);
  let borderCountries = [];
  current.borders.map((border) =>
    borderCountries.push(countries.find((country) => country.cca3 === border))
  );
  // +++ ATENCIÓN: Esta línea genera un loop infinito, ver cómo se haría +++
  // props.clickOnCountry(cca3);
  const style = { lineHeight: "4em", borderTop: "2px solid #eeeeee" };
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-5">
            <p href="#" style={{ fontWeight: "bold", fontSize: "xx-large" }}>
              {current.name.common}
            </p>
          </div>
        </div>
      </div>
      <div style={style}>
        <div className="row">
          <div className="col-5">Capital</div>
          <div className="col-7 text-left">{current.capital}</div>
        </div>
      </div>
      <div style={style}>
        <div className="row">
          <div className="col-5">Area</div>
          <div className="col-7 text-left">{current.area} km2</div>
        </div>
      </div>
      <div style={style}>
        <div className="row">
          <div className="col-5">Borders</div>
          <div className="col-7 text-left">
            <ul style={{ lineHeight: "1.2em", marginTop: "20px" }}>
              {borderCountries.map((border) => (
                <li key={border.cca3}>
                  <Link to={`/${border.cca3}`}>{border.name.common}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
