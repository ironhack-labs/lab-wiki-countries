import React from 'react'
import { Link } from 'react-router-dom'

const CountryDetails = props => {
    return (
        <>
            { console.log(props) }
            <h4>{ props.name.common }</h4>
            <hr></hr>

            <h5>{ props.capital[0] }</h5>
            <br></br>

            <h5>Area: { props.area }</h5>
            <br></br>

            <h5>Border: </h5>
            <ul>
                { props.borders.map(elm => <li><Link to={ '/details/' + elm } >{ elm }</Link></li>) }
            </ul>

        </>
    )
}

export default CountryDetails