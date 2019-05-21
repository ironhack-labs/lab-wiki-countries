import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CountryDetails from './CountryDetail'
import CountryList from './CountryList'


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <CountryList />

            </div>
            <div className="col-md-8">
              {/* <CountryDetails /> */}
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}