import React from "react";
import countries from "./countries";
import {Link} from "react-router-dom"
import {Table} from "reactstrap"

function CountryDetail(props) {
  const country_cca3 = props.match.params.cca3;

  const country = countries.find(
    country => country.cca3 === country_cca3
  );

  if (!country)
    return "No country"
     
  return (
    
    <div className="wrapper">
      <h1>{country.name.common}</h1>
      <Table>
          <tbody>
              <tr>
                  <th scope="row">Capital</th>
                  <td>{country.capital.join(", ")}</td>
              </tr>
              <tr>
                  <th scope="row">Area</th>
                  <td>{country.area} km<sup>2</sup></td>
              </tr>
              <tr>
                  <th scope="row">Borders</th>
                  <td>
                      <ul>
                          {country.borders.map(border => 
                            <li><Link to={"/country-detail/"+border}>{border}</Link></li>)}
                      </ul>
                  </td>
              </tr>
          </tbody>
      </Table>
    </div>
  );
}

export default CountryDetail;
