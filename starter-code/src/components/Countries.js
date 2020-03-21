import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom'
import CountryDetails from './CountryDetails'
import './CountryDetail.css'

export class CountryDetail extends Component {
    render() {
        const {countries} = this.props
        return (
            <div className='container mt-5'>
                <div className="main-countries">
                    <div className="all-countries">
                        <div className="countries-header">Countries</div>
                        <div className='countries'>
                        { countries.map(country => {

                            return (
                            <div key={country.name.common} className="each-country">
                                <Link to={`/country/${country.area}`}><span>{country.flag}</span> <span>{country.name.common}</span></Link>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="country-details">
                        <div className="countries-header">Country details</div>
                        <div>
                        <Switch>
                                <Route exact path="/country/:id" component={CountryDetails}/>
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryDetail
