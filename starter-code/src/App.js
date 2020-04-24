import React, { Component } from 'react';
import Header from './components/Header';
import CountryDetail from './components/CountryDetail';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CountryDetail />
      </div>
    );
  }
}
