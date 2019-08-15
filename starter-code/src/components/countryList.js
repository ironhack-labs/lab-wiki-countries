

import React, { Component } from 'react';

import  countries from '../countries.json';


class CountriesList extends Component {
	constructor() {
		super()
		this.state = {
			allCountries: countries
        }
        

    }
    

    render() {


        return ( 
            <div className="container">
<div className= "row">

            {
                this.state.allCountries.map(elm => 
                    <div className = "col">
                        <h3> {elm.name.common}</h3>
                        <p>{elm.flag}</p>
                        </div>)
                
            }


</div>

            </div>

        )
 }
  }




 export default CountriesList