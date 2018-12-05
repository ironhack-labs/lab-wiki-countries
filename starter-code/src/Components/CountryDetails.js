import React from "react";
import Countries from '../countries.json'
import './CountryDetails.css'

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
            {countryList.map((oneCountry, index) => {
              return <div className="countries" key={index}>
              
                  <a href={oneCountry.ccn3}><i className="imgCountries">{oneCountry.flag}</i>{oneCountry.name.official}</a>

                </div>;
            })}
          </div>;
    
    
    }
}

export default CountryDetails;