import React, { Component } from 'react';
import allCountries from './countries.json';
import '../App.css';

class CountryDetail extends Component {
  constructor(props){
    super(props)
  }

  getCountry = (id) =>{
    return allCountries.find((oneCountry)=>{
      return oneCountry.cca3 === id
    })
  }



  render() {

    const actualCountryDetail = this.getCountry(this.props.match.params.id)
    console.log("carajo", actualCountryDetail)

    // actualCountryDetail.borders.map((one)=>{
    //     console.log('1', one)
    // })

    const newCountry= actualCountryDetail.borders.map((one)=>{
      return(
        <ul>
          <li className="newLi"> {this.getCountry(one).name.common}  </li>
        </ul>
      )
    // console.log("pais",this.getCountry(one).name.common)
    })

    return (
      <div>



        <h1>Country</h1>
        <p>{actualCountryDetail.name.common}</p>
        <h3>Capital</h3>
        <p>{actualCountryDetail.capital}</p>
        <h3>Area</h3>
        <p>{actualCountryDetail.area}</p>
        <h3>Borders</h3>
        {newCountry}
      </div>
    );
  }
}

export default CountryDetail;
