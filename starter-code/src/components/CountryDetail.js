import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Countries from "../countries.json";

export const CountryDetail = ({ country }) => {
  const findBorderCountries = () =>
    country.borders.map(countryBorder =>
      Countries.find(el => el.cca3 === countryBorder)
    );

  const borders = findBorderCountries();

  return (
    <>
      <div className="mt-5">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
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
                  {borders.map((borderCountry, i) => (
                    <li key={i}>
                      <Link
                        className="blue-color"
                        to={`/${borderCountry.cca3}`}
                      >
                        {borderCountry.name.common}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
