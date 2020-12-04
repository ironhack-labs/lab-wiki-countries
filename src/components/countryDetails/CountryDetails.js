import React from "react";
import { Redirect, Link } from "react-router-dom";



const CountryDetails= (props) => {
const country = props.country

if(!country){
  return <Redirect to="/"/>
}

  return (
    <div className="col-7">
            <h1>{props.match.params.id}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((el) => {
                            return (
                                <li key={el}>
                                <Link to={`/${el}`} onClick={() => props.handleClick(el)}>
                                {el}</Link></li>
                            )
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  );
};

export default CountryDetails;