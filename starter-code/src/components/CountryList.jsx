import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class CountryList extends Component {
  render() {
    const {countries} = this.props;
    return (
      <div className="col-5 countryList" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
          {/* <NavLink className="list-group-item list-group-item-action" exact to="/"><span className="emoji" role="img" aria-label="emoji">😉</span> Home</NavLink> */}
          {countries.map(c => <NavLink key={c.cca3} className="list-group-item list-group-item-action" to={`/countries/${c.cca3}`}><span className="emoji" role="img" aria-label="emoji">{c.flag}</span> {c.name.common}</NavLink>)}
        </div>
      </div>
    );
  }
}
