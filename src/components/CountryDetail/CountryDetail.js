import React from 'react'
import { Link } from 'react-router-dom'

const CountryDetail = (props) => {
    // console.log(props)
    const id = props.match.params.id
    const country = props.country.filter(elm => elm.cca3 === id)
    const countryCopy = { ...country[0] }

    console.log(countryCopy)
    return (
        <>
            <h1>{countryCopy.name.common}</h1>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td style={{ width: '30%', }}>Capital</td>
                            <td>{countryCopy.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{countryCopy.area} km
                    <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryCopy.borders.map((elm, idx) => <li key={idx} > <Link to={`/detail/${elm}`} > {elm} </Link>  </li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </>
    )

}

export default CountryDetail