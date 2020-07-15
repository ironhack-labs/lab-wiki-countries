import React, { Component } from 'react';
import countries from './countries.json'
import CountryDetail from './CountryDetail'


class CountriesList extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         countries: countries.map // copy to array
    //     }

    // }

    render() {
        return (
            <div>
                {countries.map((countrie, idx) => <CountryDetail name={countrie.name} capital={countrie.capital} key={idx} />)}
            </div>
        )
    }
}

export default CountriesList;
