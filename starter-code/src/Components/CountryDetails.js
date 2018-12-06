import React from "react";
import Countries from '../countries.json'
import './CountryDetails.css'
import { Link } from "react-router-dom"




class CountryDetails extends React.Component {
    
    constructor() {
        super();
        this.state = {
            countryList: Countries
        };
    }


    

    render() {
        const { countryList } = this.state;
        
        return <div>
            {countryList.map((oneCountry) => {
                return (
                    <Link to={`/${oneCountry.cca3}`}>
                    <p key={oneCountry.cca3}>
                            <p>{oneCountry.flag}{oneCountry.name.official}</p>
                    </p>
                </Link>
                )
                  
                
            })}
          </div>;
    
    
    }
}

export default CountryDetails;