import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class countries extends Component {

    callCountries = () =>{
        return this.props.list.map((each)=>{
            return (
                <div key={each.cca3} className="countryNav">
                    {each.flag}<Link to={'/country/'+each.cca3}>{each.name.common}</Link>
                </div>
            )
        })

        
    }

    render() {

        console.log(this.props.list)



        return (
            <div>
                {this.callCountries()}
            </div>
        )
    }
}
