import React, { Component } from 'react';
import Countries from '../../countries.json'
import { Link, NavLink } from 'react-router-dom';

class Info extends Component {

  findInfo = (blah) => {
    return Countries.filter(eachCountry => {
      return eachCountry.cca3.includes(blah)})
      .map((eachCountry, i)=> {
    return (<div key={i}><Link to={`${eachCountry.cca3}`}>{eachCountry.name.official}</Link></div>
    )
      })
  }

  findBorders = (blah) => {
    return Countries.filter(eachCountry =>{
      return eachCountry.cca3.includes(blah)})
      .map((thisCountry, i)=> {
        return thisCountry.borders.map((eachCountryAtTheBorder, i)=>{
        return this.findInfo(eachCountryAtTheBorder)
        })
      })
  }

  render() {
    return (
      <div className="main-div">
        {this.findInfo(this.props.match.params.countrycode)}
        <h4>Countries at the border:</h4>
        {this.findBorders(this.props.match.params.countrycode)}
      </div>
    );
  }
}

export default Info;