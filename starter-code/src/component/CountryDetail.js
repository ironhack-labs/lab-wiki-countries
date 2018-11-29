import React, { Component } from "react";
import { Link } from "react-router-dom";

import countriesArray from "../../src/countries.json";

function findCountry(cca3FromUrl){
 return  countriesArray.find(oneCountry =>  (oneCountry.cca3 === cca3FromUrl)
  )
  }

class CountryDetail extends Component {
  render() { 
  console.log(this.props.match.params.countryCca3);

  const { params } = this.props.match;

  const countryItem = findCountry(params.countryCca3)
  console.log(params.countryCca3)


    return ( 
      <div class="col-7">


                <h1>{countryItem.name.common}</h1>
                <table class="table">
                  <thead />
                  <tbody>
                    <tr>
                      <td /* style="width: 30%;" */>Capital:</td>
                      <td>{countryItem.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                      {countryItem.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                            {countryItem.borders.map(oneBorder => {
                              return (
                                // const borderCountry = findBorder(oneBorder)
                                // <li>{borderCountry.common.name}</li>
                                <li><Link to={`/countries/${oneBorder}`}>{findCountry(oneBorder).name.common}</Link></li>
                              )
                            })}
                            {/* here I will insert the border countries */}
                          
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
              </div>
   );
  }
}
 
export default CountryDetail;