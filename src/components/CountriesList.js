import React, { Component } from 'react'
import countries from "./../countries.json";

console.log(countries);

export default class CountriesList extends Component {
    state = {
        countries,
    }
    render() {
        return (
            <div>
                {this.state.countries.map((el)=>{
                    return (
                        <p>{el.name.common}</p>
                        )
                })}
            </div>
        )
    }
}
