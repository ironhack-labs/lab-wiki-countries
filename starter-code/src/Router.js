import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import countries from './countries.json';
import Country from './components/Country.js';
const { Header, Sider } = Layout;

class Router extends Component {
  state = {
    countries
  };

  render() {
    const { countries } = this.state;
    return (
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <div className="logo">Wikicountries</div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                {countries.map(country => (
                  <Menu.Item key={country.cca3}>
                    <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Switch>
                {/* <Route exact to="/" /> */}
                <Route exact path="/country/:cca3" component={Country} />
              </Switch>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;