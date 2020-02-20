import React from 'react'

function Detail(props) {
    return (
        <div className="col-7">
        <h1>{props.country.name.common}</h1>
        <table className="table">
        <thead></thead>
        <tbody>
            <tr>
            <td id="capital">Capital</td>
            <td>{props.country.capital}</td>
            </tr>
            <tr>
            <td>Area</td>
            <td>{props.country.area} km
                <sup>2</sup>
            </td>
            </tr>
            <tr>
            <td>Borders</td>
            <td>
                <ul>
                {props.borders.map((borde,i)=><li key={i}><a href={`/countries/${borde[0]}`}>{borde[1]}</a></li>)}
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
    </div>

    )
}

export default Detail
