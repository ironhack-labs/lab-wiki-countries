import React, { Component } from 'react'
import countries from './countries.json'
import NavBarEntry from './NavBarEntry';


export default class NavBar extends Component {



    render() {

        return (
            <div className="NavBar">
                {countries.map(oneCountry => {return <NavBarEntry key={oneCountry.cca3} country = {oneCountry}/>})}  
            </div>
        )
    }
}
