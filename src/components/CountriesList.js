import React, { useState } from 'react'
import data from '../countries.json'
import CountryBox from './CountryBox'


export default function CountriesList(){

    const[country, setCountry] = useState(data)

    return(
        <div>
            <div className="col-5" >
                <div className="list-group">
                {   
                country.map(oneCountry=>
                //enviamos los props hacia el hijo, CountryBox  
                <CountryBox
                key={oneCountry.cca3}
                id={oneCountry.cca3}
                name={oneCountry.name.common}
                image={oneCountry.flag}
                />
                )
                }
                </div>
            </div>
        </div>

        
    )
}
