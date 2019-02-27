import React  from 'react';
import {NavLink} from "react-router-dom";

import countries from '../countries';
//
const CountryDetail = props => {

  const getCountry = id =>{
    return countries.find(pais => {
      return pais.cca3 === id;
    });
  }
  const {params} = props.match;
    const country = getCountry(params.id)


  console.log('props',country)
  return(
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead>

        </thead>
        <tbody>
        <tr>
          <td>Capital</td>
          <td style={{width: '30%'}}> {country.capital}</td>
        </tr>
        <tr>
          <td> Area</td>
          <td>{country.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {
                country.borders
                  .map ((el,i)=>{
                    return(
                      <li key={i}>
                        <NavLink to={`/countrydetail/${el}`}>
                          {el}
                        </NavLink>
                      </li>

                    );
                  })
              }
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );

}

export default CountryDetail;