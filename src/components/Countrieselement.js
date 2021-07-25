import countries from '../countries.json';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Countrieselement extends Component{
  render(){
    
    return(
      <li> 
      
          <Link
            to={`/${this.props.codeCountry}`}
            className="list-group-item list-group-item-action "
            aria-current="true"
          >
            {this.props.flag} <span className= 'p-2'> {this.props.listcountries} </span>
            
            
          </Link>
        </li>
    )
}
}

export default Countrieselement

 