import React from 'react'
import { Link } from 'react-router-dom';
import countriesJSON from './../countries.json';

const CountriesList = () => {
    return (
       

        <div class="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div class="list-group">

                {countriesJSON.map((eachCountry, index) => {
                return(
                    <div key={eachCountry.cca3}>
                    <Link to={`/countries/${eachCountry.cca3}`} 
                    class="list-group-item list-group-item-action" >{eachCountry.flag} {eachCountry.name.common}</Link>
                    </div>
                    )
                    })}

             
            </div>

        </div>
        
       

     
   
   
    )
}

export default CountriesList
