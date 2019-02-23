import React from "react";
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const countryDetail = (props) => {
  const tdStyle = {
    width: "30%"
  };
  console.log(props);
  const theCountry = countries.filter((e) => {
    return (e.cca3 === props.match.params.cca3) 
  }).pop();  
  console.log(theCountry);

  const borderArray = theCountry.borders.map((b) => {
    const link ="/"+b;
    return (
      <li>
        <Link to={link}> {b}</Link>
      </li>
    )
  })
  return (
    <div className="col-7">
      <h1>{theCountry.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={tdStyle}>Capital</td>
            <td>{theCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              <span>{theCountry.area}</span><span> km</span>
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderArray}                
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default countryDetail;
