import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import countries from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import App from './components/App'

class Index extends Component {
  render() {
    // console.log(countries)
    return (
      <div>
        <App countries={countries}/>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Index />
  </BrowserRouter>
  ),
  document.getElementById('root')
);