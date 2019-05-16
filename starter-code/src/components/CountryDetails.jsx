import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class CountryDetails extends Component {

    //! Some countries dont have borders. Create an IF STATEMENT WHEN DONE




    render() {
        // console.log('asdasdhjaksdhaskjdhasdjkashdkaj', this.props.match.params.id)
        let currentCountry = this.props.countries.find(country => {
            return country.cca3 === this.props.match.params.id
        })
        console.log(currentCountry.borders)
        let borders = currentCountry.borders.map(border => {
            return <Link to={border}>{border}</Link>
        })



        let links = currentCountry.borders.map(border => {
            let c = this.props.countries.find((eachCountry) => {
                return eachCountry.cca3 === border
            })
            return (
                <li>
                    <Link to={c.cca3}>{c.name.common}</Link>
                </li>
            )
        })


        console.log('ssdsdsdsd', borders)


        return (
            <Fragment>

                <h1>{currentCountry.name.common}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{currentCountry.capital[0] ? currentCountry.capital[0] : "No Capital"}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{currentCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ol>
                                    {links}


                                </ol>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default CountryDetails;