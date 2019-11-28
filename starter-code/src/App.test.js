import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React, { Component } from 'react'

export default class App.test extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
