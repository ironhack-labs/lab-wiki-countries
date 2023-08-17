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
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common} flag`}
              style={{ marginRight: '10px' }}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
    );
};

export default CountriesList;