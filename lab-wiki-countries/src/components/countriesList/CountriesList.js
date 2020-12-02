import React, { Component } from 'react'
import countries from '../../countries.json'
import CountriesCard from './CountriesCard'




class CountriesList extends Component {

    constructor() {
        super()
        this.state = {

            countriesList: countries


        }
    }

    render() {

        return (

            <>
                      
 
                {this.state.countriesList.map(elm =>

                    <CountriesCard

                        name={elm.name.official}
                        flag={elm.flag}
                        cca3={elm.cca3}

                    />)

                }
          
            </>

        )
    }
}

export default CountriesList