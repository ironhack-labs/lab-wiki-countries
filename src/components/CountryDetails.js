import { Component } from "react"
import { Link } from "react-router-dom"
import countries from '../countries'
import CountriesList from "./CountriesList"




let getCountry = (cca3) => {
    let country = CountriesList.filter((elm) => {
        return elm.cca3 === cca3;
    });
    return country;
};


class CountryDetails extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/countries/:cca3' render={(props) => (
                    <CountryDetails{...props} 
                    country={getCountry(props.match.params.cca3)}
                    allCountries={CountriesList}/>
                    )}
                />
               </Switch>
            </div>
        )
    }
}

export default CountryDetails