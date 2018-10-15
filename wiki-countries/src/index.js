
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import CountryList from './components/CountryList';


class App extends React.Component {
    render() {
      return (
        <div className="app">
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
