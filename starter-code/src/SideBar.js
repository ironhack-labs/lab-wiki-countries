import React, { Component } from 'react'
import countries from './countries.json'
import SideBarEntry from './SideBarEntry';


export default class SideBar extends Component {



    render() {

        return (
            <div className="list-group">
                {countries.map(oneCountry => {return <SideBarEntry key={oneCountry.cca3} country = {oneCountry}/>})}  
            </div>
        )
    }
}
