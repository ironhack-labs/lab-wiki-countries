  
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CountriesList extends Component {
    render() {
        console.log(this.props.allCountries)

        return (
        <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div class="list-group">

                {
                    this.props.allCountries.map((country) => {
                        return (
                            <Link to={location => ({...location, pathname:`/${country.alpha3Code}`})} class="list-group-item list-group-item-action">
                                <img src={country.flag} style={{width:"15px"}} alt="" />
                                <span> </span>{country.name}
                            </Link>
                        )
                    })
                }

                
            </div>
          </div>
        )
    }
}