import React, { Component } from "react";

import { Link } from "react-router-dom";

import countriesList from "../countries.json";

import './CountryDetail.css';

function findCountry(cca3FromUrl){
  // find one project whose ID matches the URL parameter
  return countriesList.find(oneCountry => {
    return oneCountry.cca3 === cca3FromUrl;
  });
}

class CountryDetail extends Component {

  render(){

    // "props.match" is a special prop sent by th React Router
    // (contains information about the matched route)
    const { params } = this.props.match;

    // "params.projectId" is the ID from the URL
    // (the name "projectId" is set by App.js in the URL "/project/:projectId")
    const countryItem = findCountry(params.cca3)

    return(
      <section className="CountryDetail">
      
        <h2>{countryItem.name.common}</h2>
        <hr />
        <div className="col-12 item"><div className="col-6">Capital :</div><div className="col-6">{countryItem.capital}</div></div>
        <hr />
        <div className="col-12 item"><div className="col-6">Area :</div><div className="col-6">{countryItem.area} km2</div></div>
        <hr />
        <div className="col-12 item">
          <div className="col-6">Borders :</div>
          <ul className="col-6">
            {countryItem.borders.map(oneBorder => {
              return (
                <Link to={`/${oneBorder}`}>
                  <li key={countryItem.cca3}>
                    {findCountry(oneBorder).name.common}<br/>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }

}

export default CountryDetail;