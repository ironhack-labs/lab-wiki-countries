import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Countries from './Components/Countries';
import CountryBorders from './Components/CountryBorders';
import CountryDetail from './Components/CountryDetail';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = { infoActive: false };

  toggleInfo = _ => this.setState({ infoActive: !this.state.infoActive });

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/countries" component={Countries} />
          {/* <Route exact path="/countries/:id" component={CountryDetail} /> */}
        </Switch>
        {/* <Countries onClick={this.toggleInfo} /> */}
        <Countries />
      </div>
    );
  }
}

export default App;
