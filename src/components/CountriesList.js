
import { NavLink } from 'react-router-dom';
import React from 'react';

function CountriesList (props) {

    return (
         <div>
             {props.listOfCountries.map((element) => {
              
                return (
                  
                  <div class="list-group">
                  <NavLink to={`/countries/${element.alpha3Code}`}> {element.name.common}</NavLink>
                </div> 
            )
      })} 
      </div> 
  )
}

export default CountriesList;
