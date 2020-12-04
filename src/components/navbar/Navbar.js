import React, {Component} from 'react';
import CountriesList from '../countriesList/CountriesList'


export default class Navbar extends Component {
    render (){    
        return(
            <div id="root">
            <div>
            <nav className="navbar navbar-dark bg-primary mb-2">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <CountriesList countries={this.props.countries}  handleClick={this.props.handleClick}/>
              </div>
              </div>
              </div>
              </div>
              </div>
        )
    }
}