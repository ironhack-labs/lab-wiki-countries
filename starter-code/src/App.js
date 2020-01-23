import React, { Component } from 'react';
import Countries from './components/CountryDetail';
import Details from './components/Details'
import { Route, Switch } from 'react-router-dom';
import countries from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <div className="App">
         <div className="row">
            <div className="col-5">
              <div className="list-group">
                {countries.map( country =>
                  < Countries country={country}/>
                )}
              </div>
            </div>
            <Switch>
              <Route exact path="/:id" component={Details} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;

