import React from 'react';
import { Link } from 'react-router-dom'
import countries from "../countries.json"

export default class CountriesList extends React.Component {

    state = {
        countriesList: countries
    }

    render() {
       let myStyle = {
           marginTop: "30px", 
           paddingLeft: "60px",
           width: "40%", 
           maxHeight: "95vh",
           overflow: "scroll"

       }

        return (<div>
            <ul class="list-group" style={myStyle}>
                {
                    this.state.countriesList.map((country, i) => {
                        return (

                            // <li class="list-group-item">{country.flag}{country.name.common}</li>
                            <Link class="list-group-item list-group-item-action">{country.flag}{country.name.common} </Link>

                        )
                    })
                }
            </ul>
        </div>)
    }
} 