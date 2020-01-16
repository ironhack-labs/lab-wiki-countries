import React from "react";
import CountryBox from "./CountryBox";

const Countrylist = props => {
  return (
    <div>
      {props.countries.map(country => (
        <CountryBox
          name={country.name.common}
          flag={country.cca2.toLowerCase()}
          cca3={country.cca3}
        />
      ))}
    </div>
  );
};

export default Countrylist;
