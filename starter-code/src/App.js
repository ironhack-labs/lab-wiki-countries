import React from 'react';
import './App.css';

class App extends React.Component {
  loggedIn = !false

  render = () => {
    var loggedIn = this.loggedIn
    return (
      <div className="App">
          <Switch>
            <Route path='/:cca3' component={CountryDetail} />
          </Switch>
      </div>
    );
  }
}

export default App;
