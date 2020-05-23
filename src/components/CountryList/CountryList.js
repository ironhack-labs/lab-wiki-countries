import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListElement } from '../atoms'

function CountryList({countries}){

    const elements = countries.map((country,idx)=>{
    return (<ListElement countryId={country.cca3} name={country.name.common} imgId={country.cca2} key={idx}/>)
    })
    return (
        <div className='col-5' style={{'max-height': "90vh", 'overflow': 'scroll'}}>
            <div className='list-group'>
                {elements}
            </div>
        </div>
    );
    
}

export default CountryList;
