import React from 'react'
import { Link} from 'react-router-dom';




export default function CountriesList(props) {

    console.log(props)

    return (
      

<div className="col-5" style={{height:'90vh',overflow: 'scroll'}}>
            <div className="list-group">
             {props.list.map((country)  =>  (            
              
              <Link key={country.cca3}  to={`/countries/${country.cca3}`}>
              <img style={{width:30}} alt={country.name.common} 
              src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}/>
               {country.name.common}</Link>
                             ))}
              
            </div>
          </div>
            
    
    )
}
