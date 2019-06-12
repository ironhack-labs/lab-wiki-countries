import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import FlagsCol from '../FlagsCol';
import WikiCol from '../WikiCol';
import Countries from '../countries.json'
import {Switch, Route} from 'react-router-dom'

class App extends Component {

  state= {
    countries: [],
    currentFlag: {}
  }

  componentDidMount(){
    this.setState({countries: [...Countries]})
  }

  render() {

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <FlagsCol data={this.state.countries}/>
            <Switch>
                <Route exact path='/:id' component={WikiCol}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
