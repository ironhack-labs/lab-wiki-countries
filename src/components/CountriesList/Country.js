import React from "react";

import "./CountriesList.css";

const Country = ({ cca3, flag, name }) => {
  return (
    <div className="col-5 scroll">
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          {flag}
          {name.common}
        </div>
      </div>
    </div>
  );
};

export default Country;
