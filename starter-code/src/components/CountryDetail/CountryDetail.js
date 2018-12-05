import React, { Component } from 'react';
import countries from '../../countries.json'


export default class CountryDetail extends Component {

  constructor(props){
    super(props);
    

    this.state = {
      countries
    }
  }

  render() {

    const findCountry = this.state.countries.find(country => {
      return this.props.match.params.id === country.cca3
    })
    



    return (
      
      <div>
       <h1>{findCountry.name.official}</h1>
       <p>{findCountry.capital[0]}</p>
       <p>{findCountry.area}</p> 
       <div>
        {findCountry.borders.map(border => <li>{border}</li>)}
       </div>
       
      </div>
     );
  }
}

