import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'
import styled from 'styled-components'

const SideMenu = styled.nav`
    width: 400px;
    padding: 20px;
`

const MenuElement = styled.p`
    border-bottom: 1px lightgray solid;
    margin: 0;
    padding: 5px;
    font-size: 1.5rem;
    line-height: 2.5rem;
    &:hover {
        background-color: lightskyblue;
    }
`


const Menu = () => {
    return (
        <SideMenu>
            {
                countries.map((country, index) => {
                    return (
                        <Link key={index} to={`/country/${country.cca3}`} style={{textDecoration: 'none'}}>
                            <MenuElement>{country.flag} {country.name.common}</MenuElement>
                        </Link>
                    )
                })
            }
        </SideMenu>
    )
}

export default Menu

