import React, { Component } from "react";
import './App.css';
import data from './countries.json'
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: data
        }

    }
    getId = (id) => {
        return this.state.country.filter(element => {
            return element.cca3 === id;
        })
    }

    getBorder = (id) => {
        return this.state.country.filter(element => {
            return element.cca3 === id
        }).map(element => {
            return element.borders
        })
    }

    nameBorder = (name, id) => {
        if (name === undefined || name.length === 0) {
            return
        } else {
            let countryDetailed = name[0].map(element => this.state.country.filter(elem => {
                return element === elem.cca3
            })
            )
            return countryDetailed.map( (element,i) => { return element[0] })

        }
    }

    render() {
        const { params } = this.props.match;
        const foundId = this.getId(params.id)[0]
        const foundBorder = this.getBorder(params.id) //give me border id
        const countryBorderName = this.nameBorder(foundBorder, params.id) // give me border name country
        return (
            <div>
                {
                    <div className="row">
                    <div><h1>{foundId.name.official}</h1></div>
                        <div className="col-5">Capital : {foundId.capital[0]}</div>
                        <div className="col-7">Area : {foundId.area} km2</div>
                    </div>
                }
                {
                   countryBorderName.map( (element,index) => {
                        return <li key={index} ><Link to={`/country/${element.cca3}`}>{element.name.official}</Link></li>
                    })
                }
                {console.log(foundId.name)}
            </div>
        )
    }
}

export default CountryDetail;


