import React from 'react'
import countries from '../../countries.json'
//import CountryDetails from '../CountryDetails/CountryDetails'
//import { Link } from 'react-router-dom'
import CountryItem from '../CountryItem/CountryItem'



export default function CountriesList() {

    const displayCountriesList = () => {
        
        return(
            countries.map((c,idx)=>{

                return(
                    <CountryItem {...c} key={`${c.name}-${idx}`}/>
                )

            })
        )
    }

    return (
        
        <section>
            {
            displayCountriesList()
            }
        </section>
    )

}
