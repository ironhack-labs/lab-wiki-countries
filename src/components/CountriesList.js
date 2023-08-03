import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({countries}) => {


    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map(country => (
          <Link
            key={country.alpha3Code}
            to={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
          >
            {country.flag} {country.name}
          </Link>
        ))}
      </div>
    </div>
    );
};

export default CountriesList;