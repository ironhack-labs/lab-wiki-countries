import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class CountryItem extends Component {
  render() {
    return (
      <div className="col-5">
        <div className="list-group">
          {/* <a className="list-group-item list-group-item-action" href="/ABW">
            🇦🇼 Aruba
          </a> */}
          <ul>
            <li>
              {/* <Link to={paths.movies.path}>{paths.movies.sectionName}</Link> */}
              {this.props.countryitem.name.common}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
