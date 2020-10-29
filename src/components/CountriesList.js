import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'




function CountriesList(props) {




    return (

        <div>
            {
            props.countries.map((country) => {
            return (
            <div class="list-group">
                    <Link class="list-group-item list-group-item-action" to = {`/${country.cca3}`} >{country.name.common}</Link>
            </div>
            )

            })
            }
        </div>
    )
}


export default CountriesList