import React, { Component } from 'react'
import Countries from '../countries.json'
import '../App.css';
import { NavLink } from 'react-router-dom';

export default class ListCountry extends Component {

  render() {
    
    return (  
      <div className="col-5">      
            <div className="list-group">
        {Countries.map((country,idx)=>{
       return <NavLink key={idx} className="list-group-item list-group-item-action" 
       to={`/${country.cca3}`}>{country.flag}{country.name.common}</NavLink>
       
        })}
         
          </div>
          
      </div>
      
    
    )
  }
}
