import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {

    getCountryDetails = () => {
        let { countries } = this.props
        let { id } = this.props.match.params
        let country = countries.find(country => {
            return country.cca3 === id
        })
        return country
    }

    getBorders = () => {
        let country = this.getCountryDetails()
        let { countries } = this.props
        let borderList = []
        let borders;
        let id;
        if (country) {
            id = country.borders
            borders = countries.forEach(c => {
                if (id.includes(c.cca3)) {
                    return borderList.push(c)
                }
            })
        }
        return borderList
    }

    renderLinks = () => {
        let list = this.getBorders()
        if (!list) return
        return list.map(country => {
            return <p> <Link to={`/country/${country.cca3}`} >{country.name.common}</Link></p>
        })
    }



    render() {
        let country = this.getCountryDetails()
        // const list = this.getBorders()
        // console.log(list)

        return (
            <div>
                {country
                    &&
                    <div className="card" id="countryList" >
                        <div className="card-body" >
                            <h5 className="card-title"> {country.name.common} </h5>
                            <div className="card-text" >
                                <p>  Capital: {country.capital} </p>
                                <p>Area: {country.area}</p>
                                {this.renderLinks()}
                            </div>



                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default CountryDetails;


