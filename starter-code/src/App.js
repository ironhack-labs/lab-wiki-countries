import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <!-- Grid: https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width --> */}
        <div className="container">

          <div className="row">
            <div className="col-5 list">
              <div class="list-group">
                <CountriesList />
              </div>
            </div>
            <div className="col-7 detail">
             <Switch>
                <Route exact path='/' component=''/>
                <Route path='/:id' component={CountryDetail}/>
             </Switch>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
