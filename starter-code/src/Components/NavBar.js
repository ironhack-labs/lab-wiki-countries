import React, { Component } from 'react'
import Countries from '../countries.json'
import {Link, NavLink} from 'react-router-dom'


class NavBar extends Component{
    constructor(){
        super()
        this.state={
            ourCountries: Countries
        }

    }


    render(){
        return(
            <ul>

            {this.state.ourCountries.map((country,idx)=>{
                return <li key={idx}>  <Link to={`/${idx}`}> {country.name.common} {country.flag}</Link></li>

            })}

            </ul>
        )
    }
}

export default NavBar
