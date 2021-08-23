import React, { Component } from 'react'

export default class CountriesList extends Component {

    constructor(props) {
        super(props);
    }

    getCountriesList(countryObj) {
        return (<a class="list-group-item list-group-item-action" href={"/"+countryObj?.cca3}>{countryObj.cca2} {countryObj.name.common}</a>);
    }

    render() {
        return (
            <div class="col-5" className="countries-list">
            
            <div class="list-group">
              {this.props.countries.map(country => this.getCountriesList(country))}
            </div>
          </div>
        )
    }
}
