import React from 'react';
import data from '../../countries.json'
import './CountriesList.css'
import {Link} from "react-router-dom"


const CountriesList = () => {
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-5" style={{maxHeight: 700, overflow: "scroll"}}>
                    <div className="list-group">
                        {data.map((country) => (
                             <div className='link__wrapper' key={country.cca3}>
                                <Link to={`/${country.cca3}`}>
                                    <div className='link__style'>
                                        <h6> {country.flag}<span className='mx-2'></span> {country.name.official} </h6>
                                    </div>
                                </Link>
                            </div>
                           
                        ))}
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default CountriesList;