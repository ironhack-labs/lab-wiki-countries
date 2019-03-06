import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link,NavLink, Route, Switch} from 'react-router-dom';
import CountryDetail from './components/CountryDetail';


class App extends Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      countries: []
    }
  }

  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(res => {
        console.log(res.data);
        this.setState({
          countries: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  getCountryFromCCA3 = (cca3) => {
    return this.state.countries.find(country => {
      return cca3 === country.cca3;
    });
  }

  render() {
    return (

      <div className='wiki'>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>
        <div className='row row-css'>
          <div className='col-5 country-list-column'>
            <div className='list-group country-list'>
            {this.state.countries.map((country, index) => {
              return (
                <NavLink to={'/' + country.cca3} className='list-group-item list-group-item-action'  key={index}>{country.name.common}</NavLink>
              );
            })}
            </div>
          </div>
          <Switch>
            <Route exact path='/' render={() => <div></div>}></Route>
            {this.state.countries.map((country, index) => {
              return <Route exact path={'/' + country.cca3} render={() => <CountryDetail {...country} getCountryFromCCA3={this.getCountryFromCCA3}/>} key={index}></Route>
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
