import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ListElement = ({ countryId,imgId,name }) =>{
    return(
    <a className="list-group-item list-group-item-action" href={`/${countryId}`}>
    <img src={imgId ? `https://www.countryflags.io/${imgId}/flat/64.png` :''} alt=''/>
    {name}
    </a>
  )
    
}   

export default ListElement;
