import React from 'react'
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    return(
            <div class="list-group">
            {props.countries.map((country) => {
              return  (  
                <div> 
                  <Link 
                  class="list-group-item list-group-item-action" 
                  to={`/${country.cca3}`}
                  >
                  <img clasName="mr-5" src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} width="20"/>
                  {country.name.common}
                  </Link>
                </div>  
                )}
            )}
            </div>
    )
}

export default CountriesList