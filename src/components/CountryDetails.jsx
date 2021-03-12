import React from 'react';
import { Link } from "react-router-dom";
import countries from '../countries.json'



class countryDetails extends React.Component {
  state = {
    countryId : this.props.match.params.countryId,
    foundCountry : {}
    }



country = () => {
  
  this.setState((state) => {
    return {
       foundCountry : countries.find(country => country.cca3 === this.state.countryId)

    }  })
  
   
}




render() {


  console.log(this.state.foundCountry)
  console.log(this.state)
  return (
    <div>
      <h1>Country details</h1>
      <p>Capital:{this.state.foundCountry.cca3}</p>
      <p>Area:  km2</p>
      <p>Borders:</p>
      <ul>
       
      </ul>
    </div>
  );
}
}
 

 
 
export default countryDetails ;

