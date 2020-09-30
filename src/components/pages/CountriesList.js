import React from 'react'

// Router
import { Link } from "react-router-dom"


const CountriesList = ({ countriesData }) => {

    return (
        
        <>
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                    {countriesData.map((elm, idx) => {

                        return (

                            <Link to={elm.cca3} key={idx} className="list-group-item list-group-item-action">
                                <span role="img" aria-label="name">{elm.flag}</span>
                                {elm.name.common}
                            </Link>
                        )

                    })} 
                </div>
            </div>
        </>

    )

}

export default CountriesList