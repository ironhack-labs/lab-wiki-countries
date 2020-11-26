import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props){
    return(
        <div>
            <h1>{countries[props.match.params.cca3 - 1].name.common}</h1>
            <br/>
            <hr/>
            <br/>
            <div style={{display:"flex"}}>
                <h4>Capital</h4>
                <h4 style={{paddingLeft:"50px"}}>{countries[props.match.params.cca3 - 1].capital[0]}</h4>
            </div>
            <br/>
            <hr/>
            <br/>
            <div style={{display:"flex"}}>
                <h4>Area</h4>
                <h4 style={{paddingLeft:"50px"}}>{countries[props.match.params.cca3 - 1].area} km2</h4>
            </div>
            <br/>
            <hr/>
            <br/>
            <div style={{display:"flex"}}>
                <h4>Borders</h4>
                <ul style={{paddingLeft:"50px"}}>
                    <li>{countries[props.match.params.cca3 - 1].borders}</li>
                </ul>
            </div>
        </div>
    );
}