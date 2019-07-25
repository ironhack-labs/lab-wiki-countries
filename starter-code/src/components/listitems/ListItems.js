import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class ListItems extends Component {



  render(props) {
    return (
      <div className="each-item">
        <Link to={`/info/${this.props.countrycode}`}>{this.props.flag} {this.props.name}</Link>
      </div>
    );
  }
}

export default ListItems;