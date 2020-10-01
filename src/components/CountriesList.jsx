import React from 'react'
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  
  
    return(
      <div class="container">
        <div class="row">
          <div class="col-5" style={{}}>
            <div class="list-group">
            {props.countries.map((country) => {
              return  (  
                <div > 
                  <img clasName="col-2" src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} width="20"/>
                  <Link 
                  class="list-group-item list-group-item-action" 
                  to={`/${country.cca3}`}
                  >
                  {country.name.common}
                  </Link>
                </div>  
                )}
            )}
            </div>
          </div>
        </div>
      </div>
    )
}

export default CountriesList