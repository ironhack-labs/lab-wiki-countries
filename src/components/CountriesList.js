import React from "react";
import { Link } from 'react-router-dom'

const CountriesList = ({countries}) => {
  return (
    <div>
    {countries.map(country => {
      return (
        
        <div className="container" key={country.alpha3Code}>
          <div className="card col-10 ">
          <div className="row justify-content-md-center mt-2">
            <div className="col-12 mt-2">
              <div className="list-group">
              <Link to={`/${country.alpha3Code}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                <h6 className="card-title mt-2">{country.name.official}</h6>
              </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
    })}
  </div>
  )
}

export default CountriesList;
