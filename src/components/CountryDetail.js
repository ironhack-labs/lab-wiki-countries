import React from 'react';
import countries from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountryDetail(props) {
    const getCountry = (cca3) => {
        return countries.find(el => el.cca3 === cca3)
    }
    const { params } = props.match
    const foundCountry = getCountry(params.cca3);
    console.log(foundCountry)
    return (
        <div class="container">
            <h2>{foundCountry.name.common}</h2>
            <div class="row">
                <div class="col-sm">
                <b>Official name:</b> {foundCountry.name.official}<br />
                <b>Capital:</b> {foundCountry.capital} <br />
                <b>Region:</b> {foundCountry.region} <br />
                <b>Sub-region:</b> {foundCountry.subregion} <br />
                <b>Currency:</b> {foundCountry.currency} <br />
                </div>
                <div class="col-sm">
                <b>Borders:</b><br />{foundCountry.borders.map((eachBorder) => {
                  const eachFullBorder = getCountry(eachBorder);
                  return (
                    <NavLink to={`/countries/${eachBorder}`}>
                        {eachFullBorder.name.common} <br />
                    </NavLink>
                  );
                })}
                </div>
            </div>
            <NavLink to='/'>Back to Countries</NavLink>
        </div>
    )
}

export default CountryDetail;