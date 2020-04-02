import React from "react";
import CountryDetail from "./CountryDetail";
import { Link, Route} from "react-router-dom";

class CountryList extends React.Component {
  render() {
    
    return (
      <div>
        <li>
        <Link to={`/country-detail/${this.props.code}`}>
          {this.props.flag} {this.props.name}
        </Link>
        </li>

     
      </div>
    );
  }
}

export default CountryList;
