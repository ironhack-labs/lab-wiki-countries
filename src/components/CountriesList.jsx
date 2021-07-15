import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import countriesJson from '../countries.json';

class CountriesList extends Component {

    state = {
        countries : [],
        activeId: ""
    }

    componentDidMount(){
        console.log("CountriesList MOUNTED")
        this.setState({
            countries: countriesJson
        })
    }
    
    clickHandler = (event, cca3) => {
        event.preventDefault();
        this.setState({ activeId: cca3 })
    }

    render() {
        console.log("CountriesList RENDERED", this.state.countries)
        if (this.state.countries.length == 0) {
            return <p>Loading . . .</p>
        };

        return (
            <div>
                {
                    this.state.countries.map((country) => {
                        return <ul className="list-group">
                                <li className={`list-group-item list-group-item-action ${this.state.activeId == country.cca3 ? "active" : ""}`} aria-current="true" key={country.cca3} onClick={ (event) => { this.clickHandler(event, country.cca3) } }>
                                    <Link to={`/country/${country.cca3}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        {country.flag} {country.name.common}
                                    </Link>
                                </li>
                            </ul>
                    })    
                }
            </div>
        )
    }
}

export default CountriesList;