import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CountryDetails extends Component {
  state = {
    country: this.props.country
  }

  render() {
      const {country} = this.state
      return (
          <div className="col-7">
          <h1> {`${country.name.official}`}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{`${country.capital[0]}`}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{`${country.area}`} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {country.borders.map(el => {
                      return <li key={el}> <Link to={`${el}`}> {`${el}`} </Link> </li> 
                  }) }
                  </ul>
                </td>
              </tr>
            </tbody>
          </table> 
        </div>
      )
  }
}
