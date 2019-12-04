import React from "react";
import { Link } from "react-router-dom";
 import countries from '../countries.json'
 //import queryString from "query-string";

const CountryDetail = (props) => {

const getProject = id => countries.find(oneProject => oneProject.cca3 === id);
const foundProject = getProject(props.match.params.cca3);

const borders = (cca3) =>{
    let a = countries.find(oneProject => oneProject.cca3 === cca3);
    console.log(a)
}

  return (
    <div class="col-12">
      <h1>{foundProject.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundProject.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundProject.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                  {/* <a href="/AND">Andorra</a> */}
                  {foundProject.borders.map((elm, idx) => (
                  <li>
                    <Link
                      className="list-group-item list-group-item-action"
                      key={idx}
                      to={elm}
                    //   to={`/${elm}`}
                    >
                        {console.log(elm)}
                      {elm}
                    </Link>
                  </li>
                  ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
