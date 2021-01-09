import React from 'react';
import countries from '../countries.json'
import { Route, Link, Switch } from 'react-router-dom';


class CountriesList extends React.Component {
    render() {
        return (
            <div>
                {countries
                    .map((c) => {
                        return (
                            <Link to={"/" + c.cca3}>
                                <li className="onecountryinlist">{c.name.common}</li>
                            </Link>
                            )
                    }
                    )}
            </div>

        )
    }
}

export default CountriesList