import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import countries from './countries.json'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countries: countries
    }
  }
  render() {
    return (
      <div>
        <h1>Working!</h1>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);