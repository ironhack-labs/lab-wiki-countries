import React from 'react'
import { Switch } from 'react-router'
import { Link } from 'react-router-dom'

const CountryDetails = ({ props, countriesD }) => {

    const country = countriesD.find((c) => c.alpha3Code === props.match.params.alpha3Code)
    
    const getInfo = (info) => {
        // console.log(props)
        // console.log(country)
        
        switch (info) {
            case 'name':
                return country.name
            case 'capital':
                return country.capital
            case 'area':
                return `${country.area}Km²`
            case 'borders':
                return country.borders
            case 'cca3':
                return country.cca3
            default:
                break;
        }
    }

    return (
        <div className="CountryDetails col-7">
                <h1>{getInfo('name')}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: '30%'}}>Capital:</td>
                    <td>{getInfo('capital')}</td>
                    </tr>
                    <tr>
                    <td>Area:</td>
                    <td>
                        {getInfo('area')}
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders: </td>
                    <td>
                        <ul>
                            {
                            country.borders.length < 1
                                ? <p>Without borders</p>
                                :(       
                                    getInfo('borders').map(border => <li key={border}><Link to={`/${border}`}>{border}</Link></li>)
                                )
                        }
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default CountryDetails