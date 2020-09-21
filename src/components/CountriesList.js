import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.ul`
color: black;

li {
    color: pink;
}
`

function CountriesList(props) {

    return (
        <List>
            {props.countries.map((el,i) => (
                <li key={i}>
                    <Link to={`/${el.cca3}`}>{el.name.common}</Link>
                </li>
            ))}
        </List>
    )
}

export default CountriesList
