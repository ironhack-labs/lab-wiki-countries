import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CountryDetail.css';



class CountryDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: props.Countries,
        }
    }

    render() {
        let { params } = this.props.match

        let country = this.state.countries.find(country => country.cca3 === params.id)
        let countryBorders = country.borders.map(border => this.state.countries.find(country => country.cca3 === border && country))

        return (
            <>

                <div className="row px-3">
                    <h2 className="country">{country.name.common}</h2>
                </div>

                <div className="row px-2">

                    <div className="col-6 mb-4">
                        <p>Capital:</p>
                        <hr></hr>

                        <p>Area: </p>
                    </div>

                    <div className="col-6 mb-4">
                        <p>{country.capital[0]} </p>
                        <hr></hr>

                        <p>{country.area} km² </p>
                    </div>

                </div>

                <p className="px-2">Borders:</p>

                <div className="px-2">


                    {countryBorders.map(border => {
                        return (
                            <div key={border.cca3} className="row py-2">
                                <div className="col-2"> {border.flag}</div>
                                <div className="col-9"><Link to={`/country-detail/${border.cca3}`}>
                                    <h5>{border.name.official}</h5>
                                </Link></div>
                            </div>
                        )
                    }
                    )}


                </div>



            </>

        )
    }

}

export default CountryDetail;
