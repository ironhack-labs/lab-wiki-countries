import React from 'react'
import Countries from './countries.json'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const CountryDetails = ({ name, flag, cca3 }) => {
    return (
        <div class="container mt-10">
            <div class="row">
                <div class="col-5" styles="max-height: 90vh; overflow: scroll;">
                    <div class="list-group">
                        <Link class="list-group-item list-group-item-action" to={cca3}>{flag}{name}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails