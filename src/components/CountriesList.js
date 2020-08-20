// Displays the list of links with the country names. Each link should be a react-router-dom Link which we will use to send the country code (cca3) via the URL.
import React from "react"
import countries from "../countries.json"
import {Link} from "react-router-dom"
import {Route, Switch} from "react-router-dom"
import CountryDetails from "../components/CountryDetails"




class CountriesList extends React.Component {

    state = {
        countries: countries
    }




    render() {
        return (
            <div style={{display: "flex"}}>
              <div>
              {
               this.state.countries.map((country) => {
                 return <Link to={`/${country.cca3}`}><p>{country.name.common}</p></Link>
               })
              }
              </div>
              <Switch>
                <Route path="/:cca3" render={(routeProps) => {
                    return <CountryDetails countries={this.state.countries} {...routeProps}/>
                }} />
              </Switch>
            </div>
        )
    }
}




export default CountriesList