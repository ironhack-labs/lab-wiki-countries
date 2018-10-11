import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';
import Routes from './Routes'
import 'antd/dist/antd.css'
import CountryList from './components/CountryList';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <CountryList/>
        <Routes/>
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