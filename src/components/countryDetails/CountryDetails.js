import React, { Component } from 'react'
import country from '../../countries.json'

import CardDetails from './CardDetails'
class CountryDetails extends Component {
    constructor() {
        super()
        this.state = {
            country: country
        }
    }
    componentDidMount = () => this.state.country
    render(){
        const id = this.props.match.params.id
        //console.log(this.props.match.params.id)
        return (
            <div className="col-7" >
                <div className="list-group">
                    {this.state.country.filter(elm => elm.cca3.includes(id)).map(elm => <CardDetails {...elm}/>)}
                </div>
            </div>
        )
    }

}


export default CountryDetails