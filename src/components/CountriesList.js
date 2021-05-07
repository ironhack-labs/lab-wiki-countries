import React from 'react';
import '../App.css';
import { Link, Switch, Route, Redirect } from "react-router-dom";


class CountriesList extends React.Component {
    
  render(){
    const renderedList = this.props.list.map((country,index)=>{
        const flag = `https://www.countryflags.io/${country.alpha2Code.toLowerCase()}/flat/64.png`
            return(
                <li key={index}><Link to={`/countries/${country.alpha3Code}`}>{country.name} <img src={flag} alt="" /> </Link></li>
            )
        })
  return (
    <div className="countriesList col-6">
    <h1>Countries List</h1>
    <ul>
       {renderedList}
    </ul>
     
    </div>
  );}
}

export default CountriesList;