import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ListMenu extends React.Component {
    state = {
        countries: [...this.props.countries]
    }
    render() {
        return (
            <div className="list-group">
                {this.state.countries.map((country, idx) => {
                    return (
                    <NavLink
                        className="list-group-item list-group-item-action"
                        to={"/" + country.cca3}
                        key={idx}>
                        {country.flag} {country.name.official}
                    </NavLink>
                    )})}
            </div> 
        )
    }
}