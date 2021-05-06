import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetails.css'

import { Component } from 'react';
import Countries from './countries.json';

class CountryDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      Countries: Countries,
    };
  }

  render() {
    //const params = props.match.params;
    const countriesCopy = [...this.state.Countries];

    return (
      
         
         countriesCopy.map((elm, idx) => {
             <section>
               <h1>Capital</h1>
               <hr />
               <h2>{elm.capital}</h2>
               <hr />
               <div className="borders">
                <h1>Borders</h1>
                    {elm.borders}
               </div>
             </section>;
         })
        
     
    );
  }
}

export default CountryDetails; 

