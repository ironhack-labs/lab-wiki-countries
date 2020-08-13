import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import countriesJson from '../countries.json';
// import { CountryItem } from './CountryItem'

export default class CountriesList extends Component {
   state = {
        countriesConstructor: countriesJson
        
    }
    // name[0].common
	// cca2
	// cca3
	// area
	// borders: []
 render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                        <div className="list-group">

                        {countriesJson.map((aCountry, index) => {
                            return (
                            
                                <Link to={`/${aCountry.cca3}`} className="list-group-item list-group-item-action"><span role="img">{aCountry.flag}</span>{aCountry.name.common}</Link>
                         
                            )

                        })}
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}



