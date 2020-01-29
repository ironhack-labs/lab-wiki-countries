import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {countries: props.countries}
    }
  render() {
    console.log(this.state.countries[0])
    
    return (
        <div className="list-group">
        {this.state.countries.map((oneCountrie) => {
         return <Link key={oneCountrie.cca3} className="list-group-item list-group-item-action d-flex justify-content-start align-items-center" to={`/${oneCountrie.cca3}`}>
             <img src={`https://www.countryflags.io/${oneCountrie.cca2}/shiny/64.png`} alt={oneCountrie.cca2} /> 
             <span className="ml-4">{oneCountrie.name.official}</span></Link>
        })}
        </div>
    );
  }
}
