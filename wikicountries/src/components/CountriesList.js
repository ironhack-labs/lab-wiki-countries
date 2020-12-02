import React, {Component} from 'react'
import Countries from './countries.json'
import CountryDetails from './CountryDetails'



class countriesList extends Component {
    constructor() {
        super() 
            this.state = {Countries}
    }
    render() {
        return (
        <>
            {this.state.Countries.map(elm => <CountryDetails name={elm.name.official} flag={elm.flag} cca3={elm.cca3} />)}
        </>
        )
    }
}

export default countriesList