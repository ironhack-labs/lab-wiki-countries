import React, { Component } from "react";
import { Link } from "react-router-dom";
// import countries from "../countries.json";

export class CountryDetail extends Component {
  render() {
    console.log('el this enviado',this.props.data);
    console.log('las props',this.props.id );

    const country = this.props.data.filter((c)=> c.cca3 === this.props.id);
    console.log(country);
    // let neighbors =this.props.data.filter((ele)=> country[0].countryBorders.includes(ele.cca3));
    // console.log('arry vecinos', neighbors);





    return (
      <div>
        <h1>Venezuela mi tierra</h1>
        <h2>{country[0].name.official}</h2>
        <span>Capital: {country[0].capital}</span>
        {/* <span>Neighbors: {neighbors[0]}</span> */}
      </div>

    );







  }




}