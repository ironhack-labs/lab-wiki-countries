
import { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from "../countries.json";


class Details extends Component {
    constructor() {
        super()
        this.state = {
        }
    }



    render = () => {

        const { country, fn } = this.props

        const countriesBordersMatch = countries.filter(c => country.borders.includes(c.cca3))

        return (
            <div className="col-7">
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>

                                    {country.borders.map((border, index) =>
                                        <li key={index}><Link to={"/country/" + border} key={index} onClick={() => fn(countriesBordersMatch[index])}>{countriesBordersMatch[index].name.common}</Link></li>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Details