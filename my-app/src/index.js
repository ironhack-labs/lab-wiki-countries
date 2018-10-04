import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import Routes from './Routes'
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