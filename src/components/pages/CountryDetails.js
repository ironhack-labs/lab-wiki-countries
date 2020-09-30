import React, { Component } from 'react'


class CountryDetails extends Component {
    
    constructor(props) {
        super()
        this.state = {
            country: props.countriesData
        }
    }

    
    render() {

        const { countriesData } = this.props
        const country = this.props.match.params.country

        const filteredCountry = countriesData.filter(element => element.cca3 === country)

        const countryBorders = filteredCountry.filter(element => element.borders)

        console.log(countryBorders)
        
        return (
            
            <>
                {filteredCountry.map((elm, idx) => {
                    
                    return (
                    
                        <div key={idx} className="col-7">
                            <h1>{elm.name.common}</h1>
                            <table className="table">
                                <thead></thead>
                                <tbody>
                                <tr>
                                    <td style={{width: '30%'}}>Capital</td>
                                    <td>{elm.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>{elm.area} km
                                    <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                    <ul>
                                        <li><a href="/AND">Andorra</a></li>
                                        <li><a href="/BEL">Belgium</a></li>
                                        <li><a href="/DEU">Germany</a></li>
                                        <li><a href="/ITA">Italy</a></li>
                                        <li><a href="/LUX">Luxembourg</a></li>
                                        <li><a href="/MCO">Monaco</a></li>
                                        <li><a href="/ESP">Spain</a></li>
                                        <li><a href="/CHE">Switzerland</a></li>
                                    </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                })}
            </>

        )

    }

}

export default CountryDetails