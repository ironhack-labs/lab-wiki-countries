import React, { Component } from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom'


class CountriesDetails extends Component {

    constructor() {
        super()
        this.state = {
            countries: countries,

        }
    }


    searchCountry = (code) => {
        const newArray = countries.filter(elm => elm.cca3 == code)
        return newArray
    }



    render() {

        const { code } = this.props.match.params
        const country = this.searchCountry(code)

        console.log()

        return (
            <>


                <div className="col-7">
                    <h1>{country[0].name.common}</h1>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td >Capital</td>
                                <td>{country[0].capital.map(elm => <li>{elm}</li>)}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{country[0].area} km
                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        <li>
                                            {country[0].borders.map((elm) => (<Link to={"/" + elm}> ({elm}) </Link>))}
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )

    }


}


export default CountriesDetails




