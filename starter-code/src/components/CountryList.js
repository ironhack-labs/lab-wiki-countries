import React from "react";

import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryList = () => {
  const countryList = [...countries];
  const renderList = countryList.map(el => {
    return (
      <Link key={el.ccn3} data-spy="scroll" id="list-scroll" data-target="#list-scroll" to={`/country-detail/${el.cca3}`}>
        
          <li>
            {el.name.common}
            {el.flag}
          </li>
       
      </Link>
    );
  });
  return <ul data-spy="scroll" className="full-list">{renderList}</ul>;
};

export default CountryList;
