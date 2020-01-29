import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CountrieDetail extends Component {
    constructor(props){
        super(props);
        this.state = {countries: props.countries}
    }
    render() {

        let {params} = this.props.match;
        let countrie = this.state.countries.find(countrie => countrie.cca3 === params.id)
        let countrieBorders = countrie.borders.map(border => this.state.countries.find(countrie => {
            if(countrie.cca3 === border) return countrie}))
        
        console.log(countrieBorders)
        return (
            <div className="d-flex flex-column align-items-start">
                <h2 className="mb-4">{countrie.name.common}</h2>
                    <div className="p-2">
                        <span className="mr-4">Capital: </span>
                        <span >{countrie.capital[0]}</span>
                    </div>
                    <div className="p-2">  
                        <span className="mr-5">Area: </span>
                        <span className="ml-n2">{countrie.area} km²</span>
                    </div> 
                    <div className="d-flex p-2">
                    <span>Borders: </span>
                        <span>
                            <ul>
                                {countrieBorders.map(border => {
                                    return (
                                        <li key={border.cca3}>
                                            <Link  to={`/${border.cca3}`}>{border.name.common}</Link>
                                        </li>
                                        )
                                    }
                                )}
                            </ul>
                        </span>
                    </div>
            </div>
        )
    }
}
