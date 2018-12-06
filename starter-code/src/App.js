import React, { Component } from 'react';
import './App.css';
import Countries from './countries';

class App extends Component {
  state = {
      error: null,
      isLoaded: false,
      items: []
    };
  
  componentDidMount() {
    fetch("http://206.189.7.127/countries/")
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
     
    return (
      <div className="App">
        <Countries countries={this.state.items} />
      </div>
    );
  }
}

export default App;
