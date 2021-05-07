import React from 'react'
import {Link} from 'react-router-dom'

class CountryDetails extends React.Component{

    getBorderCountries(selCountry){
        const countryBorderNames = selCountry.borders.map((borderCountry)=>{
            return (
                this.props.countries.filter((country)=>{
                    return borderCountry === country.cca3
                })
            )
        })
        return countryBorderNames.flat()
    }

    render(){
        const cca3Code = this.props.match.params.cca3
        const selectedCountry = this.props.countries.filter((country)=>{
            return country.cca3 === cca3Code
        })[0]
        const borderCountries = this.getBorderCountries(selectedCountry).map((country, index)=>{
            return (
                <li key={index}>
                    <Link to={`/country/${country.cca3}`}>
                        {country.name.common}
                    </Link>
                </li>
            )
        })

        return(
            <div className="details">
                <h1>{selectedCountry.name.common}</h1>
                <hr />
                <div className="cty-capital">
                    <div>Capital</div>
                    <div>{selectedCountry.capital}</div>
                </div>
                <div className="cty-area">
                    <div>Area</div>
                    <div>{selectedCountry.area}</div>
                </div>
                <div className="cty-borders">
                    <div>Borders</div>
                    <ul>
                        {borderCountries}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CountryDetails
