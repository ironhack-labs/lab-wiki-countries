import React, { Component } from "react";
import {Link} from 'react-router-dom'
import countries from "../countries";
import { link } from "fs";

class Details extends Component {


    findCountry = (id)=>{
        return countries.find(country => {
            return country.cca3 === id;
          });
    }



    getBorders = (borders) =>{
        return borders.map(eachBorder=>{
            let country = this.findCountry(eachBorder)
            return(
                <li>
                <Link to={`/{country-details/${eachBorder}`}>
                        {country.name.common}
                </Link>
                </li>
            )
        })
    }




  render() {
    let id = this.props.match.params.id;
    console.log(id);
    console.log(this.props);
    console.log(id, countries);

    let nation = this.findCountry(id);

    console.log(nation);

    // let id = this.props.match.params.bigHairygorilla
    // console.log(id, countries)

    // let nation = countries.find((theCountry)=>{
    //     return theCountry.cca3 ===id
    // })

    return (
      <div className="col-7">
        <h1>{nation.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style= {{width: "30%"}}>Capital</td>
              <td>{nation.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {nation.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.getBorders(nation.borders)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
