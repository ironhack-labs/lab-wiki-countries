import React, { Component } from 'react'
import countries from "./../countries.json";
import {Link} from 'react-router-dom';

export default class CountriesList extends Component {
    state = {
        countries,
    }
    render() {
        return (
            <div>
                {this.state.countries.map((el)=>{
                    return (
                        <div key={el.cca3}>
                            <Link to ={`/country/${el.cca3}`}>{el.flag} {el.name.common}</Link>
                        </div>
                        )
                })}
            </div>
        )
    }
}
