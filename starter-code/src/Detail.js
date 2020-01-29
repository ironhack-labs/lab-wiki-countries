import React, { Component } from 'react';
import countries from './countries';
import {Link} from "react-router-dom";

export default class Detail extends Component {
  //  constructor(props) {
        //super(props)

    //}

        render() {
            let myCountry = countries.filter(country => this.props.match.params.id === country.cca3)[0];
            console.log(myCountry);
            return (
                
                <div className="col-7">
                    <h1> {myCountry.name.official} </h1>
                    <h2> {myCountry.name.common} </h2>
                    <div className="row">
                        <h3>{myCountry.capital}</h3>
                    </div>
                </div>
            )
        }
    }
