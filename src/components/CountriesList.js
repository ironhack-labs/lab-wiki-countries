import { Link,Routes,Route } from "react-router-dom"
import {useState,useEffect} from 'react'

const CountriesList = (props) => {
    return (
        <div className="container">
        {props.countries ? (
            <div className="row">
            {props.countries.map(element => {
                return (
                    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                        <div className="list-group">
                            <Link className="list-group-item list-group-item-action" to={`/country-details/${element.alpha3Code}`}>{element.alpha3Code}</Link>
                        </div>
                    </div>
                )
                
            })}
            </div> )
             : (<p>Loading...</p>)
        }
        </div>
    )
}

export default CountriesList