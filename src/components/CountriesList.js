import React from 'react'
import countries from "../countries.json"
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    console.log(props)
    const displayCountries = () => {
        return (
            
          <div>
            {props.children.countries.map((country, index) => {
                return (
                    <Link to={`/countries/${index}`}>
                <p>{country.name.common}</p>
                    </Link>
                );
                
            })}
          </div>
        );
    }
    return (
        <div>
            {
                displayCountries()
            }
        </div>
    )
}
