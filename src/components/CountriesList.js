import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class CountriesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: this.props.listcountries,

        };
    }

    render() {
        return (
            <div class="col-5" >
                    {this.state.countries.map((eachCountry, i) => {
                        return <Link key={i} class="list-group-item list-group-item-action" to={eachCountry.cca3}>{eachCountry.flag} {eachCountry.name.common}
                        </Link>
                    })}
            </div>
        )

    }
}



export default CountriesList 