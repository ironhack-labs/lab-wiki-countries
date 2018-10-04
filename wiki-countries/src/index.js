import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryList from "./CountryList"


class App extends React.Component {
  render() {
    return (
      <CountryList/>
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