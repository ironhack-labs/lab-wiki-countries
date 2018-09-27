import React from 'react';
import './CountryDetail.css'

import { withRouter } from 'react-router'
import { Link, Route } from "react-router-dom";

class CountryDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }


  borderingCountries(){
    const theCountry = this.props.countries.find((propCountry)=>
    propCountry.cca3 === this.props.match.params.id
    )
    let bordering = this.props.countries.filter(nation => nation.borders.includes(theCountry.cca3) )
    console.log(bordering)
    return(
      bordering.map((nation, index) => (
        <li key={index}>
          <Link to={`/${nation.cca3}`}>{nation.name.common}</Link>
        </li>
      ))
    )
  }
  
  showCountry(){

    const theCountry = this.props.countries.find((propCountry)=>
    propCountry.cca3 === this.props.match.params.id
    )
    console.log(this.props.match.params.id)

    return(
      <div className="col-6 fixeddiv">
      <h1>{theCountry.flag}{theCountry.name.common}</h1>
      <h2>Capital: {theCountry.capital}</h2>
      <h3>Area: {theCountry.area} km</h3>
      <h4>Bordering Countries:</h4>
      <ul>
     {this.borderingCountries()}

      </ul>
      </div>
    )
  }
  
  
  render() {
    return(
      <div>{this.showCountry()}</div>
      )
    }
  }
    
  export default withRouter(CountryDetail);
