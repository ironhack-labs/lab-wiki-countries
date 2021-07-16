import axios from 'axios'
import React, { Component } from 'react'


class CountryDetails extends Component {


    state = {
        CountryDetails: null,
    }

    getData =  async () => {
        let countryCode = this.props.match.params.countryCode

        let response = await axios(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        console.log(response)

        let details = {
            code: response.data.alpha3Code,
            capital: response.data.capital,
            area: response.data.area,
            borders: response.data.borders
        }
       
        this.setState({
            CountryDetails: details
        })

    }
   
    componentDidMount(){
        
         this.getData()
    }

    componentDidUpdate(){
        let newCode = this.props.match.params.countryCode
        let stateCode = this.state.CountryDetails.code
        if(newCode !== stateCode){
            this.getData()
        }
    }

    render() {

        

        const { CountryDetails } = this.state

        if(!this.state.CountryDetails){
            return 'Loading Details! ...'
        }
       
        
        return (
            <div>

                <p>Capital: { CountryDetails.capital }</p>
                <p>Area: { CountryDetails.area }</p>

                <lu>
             
                    {
                        CountryDetails.borders.map((border) => {
                        return  <li> {border} </li>
                        })
                    }
                        
                </lu>

            </div>
        )
    }
}

export default CountryDetails