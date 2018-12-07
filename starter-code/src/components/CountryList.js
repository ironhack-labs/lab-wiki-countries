import React from 'react';
//import countries from '../countries.json';
//import countries from '../App'
import { Link } from 'react-router-dom';

const countryList = (props) => {
    return (
      <div className="">  
            <ul>
                {   
                    props.countries.map((oneCountry, index) => {
                        return <li key={oneCountry.name.common} ><Link to={`/country/${oneCountry.name.common}`} >{oneCountry.name.common}</Link></li>
                    })
                }   
            </ul>
      </div>     
    )
  }
  
  export default countryList;