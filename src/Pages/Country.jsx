import React from 'react'
import CountryDetails from '../components/CountryDetails'
import CountriesList from '../components/CountriesList'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Country extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            country : null
        }
    }

    componentDidMount() {
        let countryCode = this.props.location.state
        console.log('COUNTRY CODE', countryCode)
        if(countryCode){
            console.log('BEfore setState', countryCode.country)
            this.setState({
                country: countryCode.country,
            }, () => console.log(this.state));
            console.log('STATE', this.state)
        } 
        
        if(!countryCode){
            axios
            .get("https://restcountries.eu/rest/v2/alpha/" + this.props.match.params.id)
            .then((response) => {
                console.log('COUNTRY RESPONSE', response)
                this.setState({
                    country: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            })   
            console.log('AXIO STATE', this.state)    
        }
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios
            .get("https://restcountries.eu/rest/v2/alpha/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    country: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    render(){
        if (!this.state.country) return <div>Loading...</div>;

        return (
            <div style={{display: 'flex', justifyContent:'sapce-evelny', alignItems: 'flex-start'}}>
                <CountriesList countries={this.props.countries}/>
                <CountryDetails countries={this.props.countries} country={this.state.country}/>
            </div>
        )
    }
}

export default withRouter(Country)
