import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";



class CountryDetails extends React.Component {
  render(){
      const countrySelected = this.props.match.params.country
      console.log(this.props);
      const detail = this.props.countries.filter(country=>country.alpha3Code===countrySelected)
      const flag = `https://www.countryflags.io/${detail[0].alpha2Code.toLowerCase()}/flat/64.png`
      
  return (
    <div className="countryDetails col-6">
     <h1>{detail[0].name} <img src={flag} alt="" /></h1>
     <div>Capital: {detail[0].capital}</div>
     <div>Area: {detail[0].area}km²</div>
     <div>Borders: 
     <ul>
     {detail[0].borders.map((border,index)=>{
        return(
        <li key={index}>
        <Link to={`/countries/${border}`}>
        {this.props.countries.filter(country=>country.alpha3Code===border)[0].name}
        </Link>
        </li>
        ) 
     })}
     </ul>
     </div>
    </div>
  );}
}

export default CountryDetails;