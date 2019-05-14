import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import countries from './countries.json'
import { Layout, Menu } from 'antd'
import CountryDetails from './components/CountryDetails.js'

const {Header} = Layout

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Wikicountries</Menu.Item>
            </Menu>
          </Header>
        </Layout>
          <div className="row">
            <div className="col-5">
                <h2>Countries:</h2>
                {countries.map((eachCountry, index) => 
                    <div key={index}>
                    <h3>
                      <Link to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
                    </h3>
                    <p>{eachCountry.flag}</p>
                    </div>
                  )
                }
            </div>
            <div className="col-md-4">
            <Route exact path="/:id" component={CountryDetails}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
