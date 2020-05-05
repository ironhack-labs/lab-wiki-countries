import React, { Component } from "react";
import { Link } from "react-router-dom";

class Country extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: props.Countries, 
            idx:0   } 
    }
// crear componente con .map que regrese div --> con sigla y nombre 
//  sigla seria elm.flag 
//  nombre sería elm.name.common
//padding eje top y bottom espaciado 2   py-2 
    render () {
        return (
        <div>
            {this.state.countries.map((elm, idx) => {
            return (
                <div key={idx} className="row border py-1" >
                    <div className="col-3">      {elm.flag}      </div>
                    <div className="col-9">    <Link to={`/country-detail/${elm.cca3}`}>
                        <h4>{elm.name.common}</h4>
                            </Link>    
                    </div>
                </div>
            )})}
        </div>
        )}}

export default Country