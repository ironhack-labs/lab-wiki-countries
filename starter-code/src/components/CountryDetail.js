import React, { useCallback } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const findCountry = useCallback(id => {
    return countries.find(country => country.cca3 === id);
  });

  const country = findCountry(props.match.params.id);

  return (
    <div className="country-detail">
      <div className="row">
        <div className="col-5" />
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead />
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td> {country.capital[0]} </td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border, i) => (
                      <li key={i}>
                        <Link to={`/${border}`}>
                          <p>{findCountry(border).name.common}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
