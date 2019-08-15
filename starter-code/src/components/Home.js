import React, { Component, Fragment } from 'react'
import CountryDetail from './CountryDetail'
import axios from 'axios'
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            countries: [],
        }
    }

    componentDidMount() {
        axios.get(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
      .then(res => {
        const countriesInfo = res.data;
        this.setState({ countries: countriesInfo });
      })
    }

    render(props) {
        console.log(this.state.countries)
        return(
            <Fragment>
                <div className="list-group">
                    {this.state.countries.map( (country) => <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action" key={country.name.common} >{country.flag} {country.name.common}</Link> )}
                </div>
            </Fragment>
        )
    }
}

export default Home;