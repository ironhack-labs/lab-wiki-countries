import React, { Component } from "react";
import countries from "../countries.json";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


class CoutriesLists extends Component {
    state = {
        countries: countries
    }

    render() {
        return (
            <div className="col-5" style={{ 'max-height': '90vh', overflow: 'scroll' }}>
                <div className="list-group">
                    {this.state.countries.map(c => {
                        return (
                            <Link className="list-group-item list-group-item-action" to={('/country/' + c.cca3)}>{c.name.official}</Link>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default CoutriesLists;