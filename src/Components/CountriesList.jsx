import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CountriesList extends Component {
//   state = {
//     isClicked: false
//   };

//   handleClick = () => {
//     this.setState({
//       isClicked: !this.state.isClicked
//     });
//   };

  mappedCountries = () => {
    // const classNameList = this.state.isClicked
    //   ? "list-group-item list-group-item-action active"
    //   : "list-group-item list-group-item-action";
    const classList = "list-group-item list-group-item-action text-left";
    return this.props.countries.map((each, i) => {
      return (
        <NavLink
          key={i}
          to={`/${each.cca3}`}
          className={classList}
          activeClassName="active"
        //   onClick={this.handleClick}
        >
          {each.flag} {each.name.common}
        </NavLink>
      );
    });
  };

  render() {
    return (
      <div className="col-4 countries-column">
        <div className="list-group">{this.mappedCountries()}</div>
      </div>
    );
  }
}

export default CountriesList;
