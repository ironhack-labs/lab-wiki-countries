import { Component } from 'react'
import Countries from './countries.json'

class CountryDetails extends Component {

    constructor() {
        super()
        this.state = {
            Countries: Countries
        }
    }

    render() {

        return (

            <section>

                {
                    this.state.Countries.map((elm, idx) =>
                        <div className='col-7' key={idx}>
                            <p>{elm.name.official}</p>
                            <table className="table">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Capital</td>
                                        <td>{elm.capital}</td>
                                    </tr>
                                    <tr>
                                        <td>Area</td>
                                        <td>
                                            {elm.area} km
                                    <sup>2</sup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Borders</td>
                                        <td>
                                            <ul>
                                                <li><a href="#">{elm.borders}</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>)
                }

            </section>
        )
    }
}

export default CountryDetails