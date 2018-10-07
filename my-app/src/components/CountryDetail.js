import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const CountryDetail = ({ name, path }) => {

    return (
        <div >
            <a href={path} 
    
            className="list-group-item list-group-item-action">{name}</a>
        </div>
    )
}

export default CountryDetail;