import countries from './countries.json'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countryList: countries,
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <ul>
                        {this.state.countryList.map((elm, ind) => <li key={ind}><Link to={elm.cca3}>{elm.name.common}</Link></li>)}
                    </ul>

                </div>
            </div>
        )
    }


}

export default CountriesList
