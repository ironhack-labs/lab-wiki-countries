import { Link } from 'react-router-dom';
import React, { Component } from 'react';



class CountriesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: this.props.countries,

        };
    }

    render() {
        return (

            <div class="col-5" >
                <div class="list-group">

                    {this.state.countries.map((elm, idx) => {
                        return <Link key={idx} class="list-group-item list-group-item-action" to={elm.cca3}>{elm.flag} {elm.name.common}</Link>
                    })}

                </div>
            </div>
        )

    }
}



export default CountriesList