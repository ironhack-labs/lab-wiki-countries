import React, { Component } from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom'

class CountriesList extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         countries: countries
    //     }
    // }

    render() {
        return (
            <>
                <div className="col-5">
                    <div className="list-group">
                        {countries.map((elm, index) => <Link to={elm.cca3} key={index}>{elm.flag}{elm.name.common}</Link>)
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default CountriesList