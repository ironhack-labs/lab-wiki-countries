import React, {Component} from 'react'
import countries from '../countries.json'

export default class Detail extends Component {
    state = {
        country:{}
    }
    UNSAFE_componentWillReceiveProps(){
        const country = countries.find(
            country => country.cca3 === this.props.match.params.cca3
        )
        this.setState({country})
    }
    render(){
        const {country} =this.state
        return(
            <div>
            
            <div>
            <h3>Capital</h3>
            <h4>{country.capital}</h4>
            </div>
            <h3>Area</h3>
            <h4>{country.area}km2</h4>
            <div>
            <h3>Borders</h3>
            <h4>{country.borders}</h4>
            </div>
            </div>

        )
    }

} 