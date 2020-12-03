import { Component} from 'react'
import React from 'react'
import Countries from '../countries.json';
import {Link} from 'react-router-dom'

export default class CountriesList extends Component {

    state = {
        countries: []
      }
    
    componentDidMount() {
        fetch(Countries)
          .then(res => {
            const countries = res.data;
            this.setState({ countries });
          })
      }

    render() {
        console.log(this.state.countries)

        return (
            <div>
                <h2>List of countries:</h2>
            <div className="col-5" style={{'maxHeight': '90vh', 'overflow': 'scroll'}}>
            <div className="list-group">
            {/* {this.componentDidMount()} */}
            {Countries.map(country => {
                return (
                    <div key={country.name.common}>
                        <h3 className="list-group-item list-group-item-action">
                            <Link to={`/countries/${country.name.common}`}>
                                {country.name.common}
                            </Link>
                        </h3>
                    </div>
                )
            })}
            </div>
            </div>
            </div>
        )
    }
}
