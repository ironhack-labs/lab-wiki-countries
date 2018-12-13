import React, { Component } from 'react'
import countries from '../../countries'

class CountryDetail extends Component{

    componentWillMount(){
        const { cca3 } = this.props.match.params
        this.setState({
            cca3
        })
    }

    render(){
        const { cca3 } = this.state
        let country = countries.filter(c =>{
            return c.cca3 == cca3
        })
        return(
            <div>
                <h1>{country[0].name.common}</h1>
                <hr />
            </div>
        )
    }
}