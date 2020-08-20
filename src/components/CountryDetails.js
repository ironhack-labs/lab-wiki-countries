// Is the component that we will render via the react-router-dom's Route and will be receiving the country code (cca3) via the URL.
import React from "react"
import {Link} from "react-router-dom"




 class CountryDetails extends React.Component {

   

    render() {

        let countryCCA3 = this.props.match.params.cca3
        let countries = this.props.countries
        
        let matchingCountry = countries.find((country) => {
            return country.cca3 === countryCCA3
        })
       

       let matchingCountryName = matchingCountry

        return (
            <div>
              <h1>{matchingCountry.name.common}</h1>
              <p><strong>Capital</strong>: {matchingCountry.capital}</p>
              <p><strong>Area</strong>: {matchingCountry.area}km2</p>
              <strong>Borders:</strong>
              {
                matchingCountry.borders.map((country) => {
                    return <Link to={`/${country}`}><li>{country}</li></Link>
                })
              }
              
            </div>
        )
    }
}




export default CountryDetails

