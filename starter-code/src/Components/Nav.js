import React, { Component, Fragment } from 'react';


export default class Nav extends Component {
  render() {
    return (
      <Fragment>

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Wiki Countries</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> */}
          </ul>
        </nav>

      </Fragment>
    )
  }
}