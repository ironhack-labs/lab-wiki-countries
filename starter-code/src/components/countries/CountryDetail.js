import React, { Component } from 'react'
import countries from '../../countries'

class CountryDetail extends Component{

    componentWillMount(){
        const { cca3 } = this.props.match.params
        const country = countries.filter(c => c.cca3 !== this.props.match.params.cca3)[0]
        this.setState({
            country
        })
    }

    render(){
        const countrySelected = this.state.country
        return(
            <div className="col-7">
                <h1>{countrySelected.name.common}</h1>
                <hr />
                <h2>Capital: {countrySelected.capital[0]}</h2>
                <h2>Area: {countrySelected.area} km^2</h2>
                <button onClick={()=> this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}

export default CountryDetail