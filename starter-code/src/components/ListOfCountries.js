import React from "react";
import { Link } from "react-router-dom";
import CountryName from "./CountryName";

export default function ListOfcountries(props) {
  // https://stackoverflow.com/questions/24706267/cannot-read-property-map-of-undefined
  if (props.countries) {
    return (
      <div className="list-group mh-100" style={{height: "100vh", overflow: "scroll"}}>
        {props.countries.map((country) => (
          <Link to={`/${country.cca3}`}>
            <CountryName
              key={country.cca3}
              {...country}
              active={country.cca3 === props.activeCca3}
              clickOnCountry={props.clickOnCountry}
            />
          </Link>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
