import React from "react";
import { Link } from "react-router-dom";
const countryModuleStyle = {
  scroll: "overflow",
  textAlign: 'left"'
};
class CountryModule extends React.Component {
  render() {
    return (
      <div style={countryModuleStyle}>
        <Link
          className="list-group-item list-group-item-action"
          to={`/country/${this.props.country.cca3}`}
        >
          {this.props.country.flag} {this.props.country.name.common}
        </Link>
      </div>
    );
  }
}
export default CountryModule;
