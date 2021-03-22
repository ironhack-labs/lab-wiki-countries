import React from 'react'
import countriesJSON from './../countries.json';
import {Link} from 'react-router-dom'


const ContriesList = (props) => { 

return (  

<div style={CountryList} >  

    <ul className="list-group">  

    {countriesJSON.map((country) => {     
        return (         
                <li  className="list-group-item" key={country.cca3}>
                    <Link to={`/countries/${country.cca3}`}> {country.name.common}</Link> 
                
                </li> 
        )
    })}

    </ul> 
</div>

)}

const CountryList = {  
maxHeight: "90vh",
overflow: "scroll"

}
export default ContriesList;