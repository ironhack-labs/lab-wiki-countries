import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const CountryDetail = props => {
  console.log("props");
  console.log(props);

  const getCountry = cca3 => {
    return countries.find(oneCountry => oneCountry.cca3 === cca3);
  };

  const getCountryName = (cca3) => {
    const object = getCountry(cca3);
    return object.name.common;
  }

  const { params } = props.match;
  const foundCountry = getCountry(params.id);
  console.log("country", foundCountry);

  return (
    <div>
      <h1> {foundCountry.name.common} </h1>{" "}
      <table className="table">
        <thead> </thead>{" "}
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>
              {" "}
              Capital
              {" "}
            </td>{" "}
            <td>{foundCountry.capital}</td>{" "}
          </tr>{" "}
          <tr>
            <td> Area </td>{" "}
            <td>
              {" "}
              {foundCountry.area}<sup> 2 </sup>{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            <td> Borders </td>{" "}
            <td>
              <ul>
                {foundCountry.borders.map((cca3, index) => {

                  return (<li key={index}>
                    <Link to={`/countries/${cca3}`}>
                      {getCountryName(cca3)}
                    </Link></li>)
                })}
              </ul>{" "}
            </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default CountryDetail;
