import React from 'react'

import CountriesItem from '../CountriesItem/CountriesItem'
import countries from '../../countries.json'


export default function CountriesList() {

    const displayCountries = () => {
        return (
            countries.map((e, idx) => {

                return (
                    <CountriesItem {...e} key={`${e.name.common}-${idx}`} />
                )
            })
        )

    }

    return (

        <div class="container">

            <div class="row">

                <div class="col-5" >
                    <div class="list-group">
                 

                    {
                        displayCountries()
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}