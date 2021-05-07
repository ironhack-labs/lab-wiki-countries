import React from 'react'
import {Link} from 'react-router-dom'

class CountryDetails extends React.Component {

    render(){
        const cca3 = this.props.match.params.cca3
        const country = this.props.countries.filter(country=>{
            return country.cca3 === cca3
        })

        const allBorders = country[0].borders.map(cnt=>{
            return (
                <Link to={`/country/${cnt}`}><li>{this.props.countries.map(country=> country.cca3 === cnt ? <span>{country.name.common}</span> : null)}</li></Link>
            )
        })
        
        return (
            <div className="CountryDetails">
                <h1>{country[0].name.common}</h1>  
                <p>Capital:   {country[0].capital}</p>   
                <p>Area:   {country[0].area}</p>
                {country[0].borders.length === 0 ? null : (
                    <>
                        <p>Borders</p>     
                        <ul>
                            {allBorders}
                        </ul>
                    </>
                )}
            </div>
        )
    }
}

export default CountryDetails