import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import countries from '../countries.json';

export default class Menu extends Component{
  state={
    countries
  }
  render(){
    const {countries} = this.state
    return (
      
     

      <div
      style={{width: '30vw', height:'100vh', overflow:'scroll', backgroundColor:'#f5f6f7'}}>
        {countries.map((country, i) =>(
          <Link key={i} to={`/country/${country.cca3}`}>
            <p>{country.name.official}</p>
          </Link>
        )

        )}
        </div>
    )
  }
}