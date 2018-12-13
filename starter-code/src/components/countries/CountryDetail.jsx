import React, { Component } from 'react'
import countries from '../../countries'
import { Link } from 'react-router-dom'

class CountryDetail extends Component{

    componentWillMount(){
        const { ccn3 } = this.props.match.params
        const country = countries.filter(c => c.ccn3 !== this.props.match.params.ccn3)[0]
        this.setState({
            country
        })
    }

    render(){
        const countryDet = this.state.country
        console.log('HOLI'+this.state.country.ccn3)
        return(
            <div>
                <h1>{countryDet.name.common}</h1><hr/>
                <label >Capital: {countryDet.capital[0]}</label> <hr/>
                <label >Area: {countryDet.area} km^2</label> <hr/>
                <label >Borders: </label> <br/>
                {countryDet.borders.map((BorderCountry,index)=><Link to={'/country/'+BorderCountry} key={index}>{BorderCountry}</Link>)}
            </div> 
        )
        
    }
}

export default CountryDetail