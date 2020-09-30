import React, { Component } from 'react'
import { Link } from 'react-router-dom'


function Country({flag, name, cca3}) {


    return (
        <>
            <Link to={"/"+cca3} className="list-group-item list-group-item-action">
                {flag} {name.common}</Link>
            
        </>
    )
}


export default Country