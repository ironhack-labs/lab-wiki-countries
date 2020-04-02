import React from "react";
import { NavLink} from "react-router-dom";
import '../styling/CountryList.css';

class CountryList extends React.Component {
  render() {
    
    return (
      <div>
        
        <NavLink to={`/country-detail/${this.props.code}`} activeClassName="selected">
          <li className="country-list-item"> {this.props.flag} {this.props.name}</li>
        </NavLink>
      </div>
    );
  }
}

export default CountryList;
