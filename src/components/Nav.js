import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Nav(props){
    console.log(props.active)
    return     <div style={{height: '100vh', width: '300px', flexWrap: 'nowrap', overflowY: 'scroll'}} class="nav flex-column nav-pills">
            {
                props.countries.map( country => {
                    return (
                <li key={country.cioc}>
                <NavLink activeClassName={'active'} className={'nav-link'} to={`/country/${country.cca3}`}>{country.flag} {country.name.common}</NavLink>                
                </li>)
                })
            }
        </div>
    }