import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// import { countries } from "./App"

const CountriesList = (props) => {

    return (
        <div>
            { props.countries && props.countries.map(country => {

                return (<div key= {country.cca3} className="col-20" style={{maxHeight: "90vh", overflow: "scroll"}}>
                  <div className="list-group" >
                    <Link className="list-group-item list-group-item-action" to={{pathname:`/${country.cca3}`, state: {countries: props.countries}}}>{country.flag} {country.name.common}</Link>
                    </div>
                </div>)
            })
    
            }
        </div>
    )
}

export default CountriesList

