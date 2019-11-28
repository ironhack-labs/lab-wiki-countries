import React from "react";
import { Link } from "react-router-dom";

const SideContainer = props => {
  let countryData = props.countries.map((country, index) => {
    return (
      <div>
        <div key={index} data={country}>
          {country.flag}
        </div>
        <Link to={`/countryDetail/${country.cca3}`}>{country.name.common}</Link>
      </div>
    );
  });
  return (
    <div>
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">
          {countryData}
          {/* <Link
                      to={`/${data}`}
                      className="list-group-item list-group-item-action"
                    >{data}
                    </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
