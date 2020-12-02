import React, { Component }from 'react'
import countries from './../countries.json'
import OneCountry from './OneCountry'


class CountriesList extends Component {
    constructor() {
        super()
        this.state = {countries}
    }

        render(){
            return (
                <>
                    {this.state.countries.map((elm,idx) => <OneCountry key={idx} name={elm.name.official} flag={elm.flag} cca3={elm.cca3}/>)}  
                </>
            )
            
}        

}


export default CountriesList