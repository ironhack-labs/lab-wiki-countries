import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ListMenu extends React.Component {
    state = {
        countries: [...this.props.countries]
    }
    render() {
        return (
            <div className="list-group">
                {this.state.countries.map((country, index) => {
                    return (
                        <NavLink className="list-group-items list-group-item-action"
                        to={"/" + country.cca3}
                        key={index}>
                        {country.flag} {country.name.official}
                        </NavLink>
                    )
                })}
            </div>
        )
    }
}