import React from 'react';
import Data from '../countries.json'
import {Link} from 'react-router-dom'

const Border = ({id}) => {
    const country = Data.find(c => c.cca3 === id)
    console.log(country.name.common)
    return ( 
        <li><Link to={id}>{country.name.common}</Link></li>
     );
}
 
export default Border;