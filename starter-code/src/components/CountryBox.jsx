import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class CountryBox extends Component {

    render() {

        return (
            <Fragment>
                <div class="list-group">
                    <div className="list-group-item list-group-item-action">
                        <img src={`https://www.countryflags.io/${this.props.flag}/flat/64.png`} alt="country" />
                        <Link to={`/country/${this.props.code}`}>{this.props.name}</Link>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default CountryBox;

