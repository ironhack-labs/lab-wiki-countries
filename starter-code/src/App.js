import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import countries from './countries.json'
import countriesDetails from './components/CountriesDetails'
import { Layout } from 'antd';

const { Header } = Layout;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Wiki Countries</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      <h2>Countries</h2>
      {countries.map((oneCountrie, index)=>
      <div key= {oneCountrie.id}/>
      <h3><Link to ={`/${oneCountrie.cca3}`}>{oneCountrie.name.common}</Link></h3>
        )}

      </div>
    );
  }
}

export default App;
