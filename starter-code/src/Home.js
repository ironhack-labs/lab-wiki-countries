import React from "react";
import {Link} from "react-router-dom";
import  data from "./countries.json";
import 'bootstrap/dist/css/bootstrap.css';



const Countries = props => {
console.log(data)
return (
    
<div className="col-5" style={{maxHeight: '90vh' , overflow: 'scroll', textAlign:'left'}}>
{data.map(country => {
    return (
    <div key={country.ccn3} className="list-group">
    <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.official}</Link> 
    </div>
    );
})}

</div>
)
}


export default Countries;