import React from 'react';
import {Link} from 'react-router-dom';

const CoutrieBox = ({image, name, cca3}) => {
    // console.log(cca3)
    return (
    
        <Link to={`/${cca3}`}>{image} {name}</Link> 
   
    )
}

 

export default CoutrieBox;