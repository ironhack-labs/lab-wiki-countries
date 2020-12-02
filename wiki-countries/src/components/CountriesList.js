import React, { Component } from 'react'
import countries from './countries.json';
import CountryLine from './CountryLine';


class countriesList extends Component {
    constructor() {
        super()
        this.state = {
            country: countries,
        }
    }

    render() {
        return (

            <div className="col-5" styles="max-height: 90vh; overflow: scroll;">
                <div className='list-group'>
                    {this.state.country.map(elm => <CountryLine key={elm.cca2} name={elm.name.official} image={elm.flag} cca3={elm.cca3} />)}
                </div>
            </div>


        )
    }
}
export default countriesList