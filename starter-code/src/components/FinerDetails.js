import React, { Component } from 'react';



class FinerDetails extends Component {
        countryDetails = () => {
            let country = this.props.countries.find(eachCountry => {
                return eachCountry.cca3 === this.props.match.params.countryId
            })
            console.log(country)
            return (
                <div className="countryDetail">
                    <h2>Country Detail</h2>
                    <h3> {country.name.common}</h3>
                        <hr></hr>
                            <p>Capital: {country.capital}</p>
                            <hr></hr>
                                <p>Area: {country.area} km <sup>2</sup> </p>
                        <hr></hr>
                    </div> 
            )
       }

    render() {
        return ( 
            <div>
                {this.countryDetails()}
                <hr></hr>
                Borders:
                <ul>
                    <li>Borders</li>   
                    {/* create a new function to iterate over borders, create links to each country. */}
                </ul>
            </div>
        )      
    }
}

export default FinerDetails;