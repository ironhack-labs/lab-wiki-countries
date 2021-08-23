import React, { Component } from 'react'

const CountryDetails = (props) => {

    const renderCountrySummary = (border) =>{
        let countryObj = props.countries.filter( x => x.cca3 == border);
        return (<><li><a href={"/"+countryObj[0]?.cca3}>{countryObj[0]?.name.common}</a></li>
        </>);
    }

    return (
      <div className="countryDetails">
            <div className="col-7 country-name">
            <h1>{props.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="capital">Capital</td>
                  <td>{props.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {props.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {props.borders.map(border => renderCountrySummary(border))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
       </div>
    )
  }


export default CountryDetails;