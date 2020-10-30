import React from 'react'
import { Link } from 'react-router-dom'



export default function CountriesList(props) {

    const countriesArr = props.countries

    return (

        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="list-group">
            {
                countriesArr.map((country, index) => 
                    
                    <Link 
                    to={country.cca3} 
                    className="list-group-item list-group-item-action" 
                    key={index}>

                    {country.flag} &emsp;
                    {country.name.common}
                    </Link>
                
                )
            } 
    
          </div>
        </div>
            
    
    )
}


