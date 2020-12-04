import React from 'react'
import { Link } from 'react-router-dom'
import './styles/CountryDetails.css'

const countryDetails = (props) => {
    const {params} = props.match

    const country = props.countries.filter((item) => {
        return item.cca3 === params.id
    })[0]

    const getBorders = () => {
        const borders = props.countries.filter((item) => {
            return country.borders.includes(item.cca3)
        })
        return borders.map((border,index) => {
            return (
                <li key={index}>
                    <Link to={`/${border.cca3}`} >{border.name.common}</Link>
                </li>
            )
        })
    }

    return (
        <div id='details' className='col-7 position-fixed'>
            <h1>{country.name.common}</h1>
            <table className='table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width:'30%'}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td style={{width:'30%'}}>Area</td>
                        <td>{country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width:'30%'}}>Borders</td>
                        <td>
                            <ul>
                                {getBorders()}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default countryDetails