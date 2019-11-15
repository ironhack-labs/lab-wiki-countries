import React, { Component } from "react";
import countryData from "./countries.json";
import { Link, Switch, Route } from "react-router-dom";

// class CountryDetail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: countryData,
//       name: countryData.name,
//       flag: countryData.flag,
//       borders: countryData.borders,
//       area: countryData.area,
//       languages: countryData.languages
//     };
//   }

class CountryDetail extends Component {


  // showCountry = () => {
  //     let theCountryName = this.state.data.map((item, i)=>(item.name.common))
  //     let theCountryFlag = this.state.data.map((item, i)=>(item.flag))
  //     let theCountryPopulation = this.state.data.map((item, i)=>(item.flag))

render(){

    let country = this.props.countries.find(eachCountry=>{
        console.log(eachCountry.name.common)
        return this.props.match.params.id === eachCountry.cca3
    })
    console.log(country)
  
    return (
     
        <div className="theCountry">
        <h1>{country.name.common}</h1>
        {this.props.match.params.id}
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital[0]}</td>
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
                    {country.borders.map(eachBorder=>{
                        return  <li><Link to={`${eachBorder}`}>{eachBorder}</Link></li>
                    })}
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
