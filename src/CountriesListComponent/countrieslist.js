import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './countriesList.css'
class CountriesList extends Component {
    constructor({ countries }) {
        super()
        this.state = {
            countries
        }
    }

    render() {

        return (
            <div className="col-5 big-box">
                <div className="list-group">
                    {
                        this.state.countries.map(elm => {
                            return (<NavLink key={elm.cca3} className="list-group-item" activeClassName="active" to={{ pathname: `/details/${elm.cca3}`, state: { country: elm, countries: this.state.countries } }}>{elm.name.common}</NavLink>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}

export default CountriesList