import React from 'react'
import './countryDetail.css'
import { NavLink } from 'react-router-dom'



const Details = (props) => {
    //console.log(props)

    const theID = props.match.params.details
    const country = props.theCountry.filter(name => name.cca3 == theID)
    const objetCountry = { ...country }

    console.log(objetCountry[0].borders)




    return (
        <>
            <div className="col-7">
                <h1>{objetCountry[0].name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{objetCountry[0].capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{objetCountry[0].area} km
                    <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {objetCountry[0].borders.map((elm, idx) => <li key={idx} > <NavLink  to={elm}> <span>{elm}</span>  </NavLink>  </li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Details