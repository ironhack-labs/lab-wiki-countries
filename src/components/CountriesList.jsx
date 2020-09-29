import React from 'react'
import {NavLink} from 'react-router-dom'

const ContactList = (props) => {

    return (
        <>
            {props.countries.map((country) => {
                return (

                    <NavLink className="country-list-row" activeClassName="active" to={`/${country.cca3}`}>
                        <figure>{country.flag}</figure>{country.name.common}
                    </NavLink>

                )
            })}
        </>
    )
}

export default ContactList