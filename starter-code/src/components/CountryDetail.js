import React, { Component } from 'react'
import countries from '../countries.json'
import List from './List'
import Card from './Card'
import { Switch, Route } from 'react-router-dom'

class CountryDetail extends Component {
    constructor() {
        super()
        this.state = {
            allCountries: countries
        }

    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {
                        countries.map((elm, idx) => {
                            return (<List key={idx} name={elm.name.common} flag={elm.flag} />)
                        })
                    }
                </div>
                <div>
                    {
                        countries.map((elm, idx) => {
                            return (<Card key={idx} name={elm.name.common} capital={elm.capital} area={elm.area} borders={elm.borders} />)
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

}
//name, capital, area, borders, id
export default CountryDetail

{/* <Switch>
            <Route exact path='/id' component={Card} />
          </Switch> */}