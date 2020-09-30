import React, {Component} from 'react';
import country from '../../countries.json'

import { Link } from 'react-router-dom'



class CountryList extends Component {
    constructor() {
        super()
        this.state = {
            country: country
        }
    }
    render() {
        return (
            <div className="col-5" >
                <div className="list-group">
                    {country.map(elm => <Link className="list-group-item list-group-item-action" key={elm.ccn3} Link to={elm.cca3}>{elm.flag} {elm.name.common}</Link>)}
                </div>
            </div>
        )
    }
}



export default CountryList


