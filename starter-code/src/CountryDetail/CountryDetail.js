import React, {Component} from 'react'

class CountryDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            countries: props
        }
    }
    render(){
        return(
            <>
<h3>WikiCountries</h3>
<p>{this.state.countries.name}</p>
</>
        )
    }
}

export default CountryDetail;