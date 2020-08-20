import React, { Component } from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom'

class CountriesList extends Component {
    state = {
      country: countries
    }

    render() {
        return (
        <div className="container"> 
              <div className="row">
                <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <div className="list-group">  
                  
                    {countries.map( (country) => {
                        return (
                        <div className="list-group-item list-group-item-action">    
                        <Link  to={`/${country.cca3}`}><span role="img">{country.flag}</span>{country.name.common}</Link>
                        </div>
                        )

                    })}
                    </div>
                </div>
            </div>
      </div>
    )
}
}

  
  export default CountriesList;