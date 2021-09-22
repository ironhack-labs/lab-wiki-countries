import React from 'react'
import { Link } from 'react-router-dom'
import countrie from '../../countries.json'


const CountryDetails = (props) => {

    const { cca3 } = props.match.params
    const coountrieMatch = countrie.find(country => country.cca3 === cca3)
    const displayBorder = () => {
        return (
            coountrieMatch.borders.map((border, id) => {
                const borderName = countrie.find(e => border === e.cca3)
                return (
                    <Link to={`/countrydetails/${border}`}><li key={id}>{borderName.name.common}</li></Link>
                )
            })
        )
    }

    return (
        <section className="col-4">
            <div className="col-8">
                <h1>{coountrieMatch.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30 %' }}>Capital: </td>
                            <td>{coountrieMatch.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {coountrieMatch.area}
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    <li>{displayBorder()}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default CountryDetails