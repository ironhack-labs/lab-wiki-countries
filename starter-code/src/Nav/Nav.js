import React, { Component } from 'react';
import './navbar.css';

class Nav extends Component {
  render() {
    return (
     <div className="nav-container">
       <div className="uk-width-1-2@s uk-width-2-5@m">
        <ul className="uk-nav uk-nav-default">
         <li className="uk-active"><a href="#">WikiCountries</a></li>
        </ul>
      </div>
   </div>
    )
  }
}

export default Nav;