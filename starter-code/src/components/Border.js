import React from 'react';
import Data from '../countries.json'
import {Link} from 'react-router-dom'

const Border = ({id, handleSelect}) => {
    const country = Data.find(c => c.cca3 === id)
    
    return ( 
        <li className="borders"><Link onClick={() => handleSelect(id)} to={id}>{country.name.common}</Link></li>
     );
}
 
export default Border;