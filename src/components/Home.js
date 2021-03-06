import React from 'react'
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

import axios from 'axios'


class Home extends React.Component{

    state = {
        country: null,
        countries: []
    }

    changeCountry = (country) => {
        this.setState({
            country
        })
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((countries) => {
                console.log(countries.data)
                this.setState({
                    countries: countries.data
                })
            })
            .catch(error => console.log(error))
       
    }

    render(){
        return(
        <div>
            <div className="row mt-5">
                <div className="col-4">
                        <CountriesList changeCountry={this.changeCountry} countries={this.state.countries}/>
                </div>

                <div className="col">
                        {this.state.country ? <CountryDetails country={this.state.country} /> : null}
                </div>
            </div>
        </div>            
        )
    }

    
}

export default Home