import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">WikiCountries</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                  height: '100%',
                  borderRight: 0,
                }}
              >
                <Menu.Item key="1">
                  <Link to={`/ABW`}>🇦🇼 Aruba</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to={`/AFG`}>🇦🇫 Afghanistan</Link>
                </Menu.Item>
                <Menu.Item key="3" href="/AGO">
                  🇦🇴 Angola
                </Menu.Item>
                <Menu.Item key="4" href="/AIA">
                  🇦🇽 Åland Islands
                </Menu.Item>
                <Menu.Item key="5" href="/ALA">
                  🇦🇮 Anguilla
                </Menu.Item>
                <Menu.Item key="6" href="/ALB">
                  🇦🇱 Albania
                </Menu.Item>
                <Menu.Item key="7" href="/AND">
                  {' '}
                  🇦🇩 Andorra
                </Menu.Item>
                <Menu.Item key="8" href="/ARE">
                  🇦🇪 United Arab Emirates
                </Menu.Item>
                <Menu.Item key="9" href="/ARG">
                  🇦🇷 Argentina
                </Menu.Item>
                <Menu.Item key="10" href="/ARM">
                  🇦🇲 Armenia
                </Menu.Item>
                <Menu.Item key="11" href="/FLK">
                  🇫🇰 Falkland Islands
                </Menu.Item>
                <Menu.Item key="12" href="/FRA">
                  🇫🇷 France
                </Menu.Item>
                <Menu.Item key="13" href="/ZWE">
                  🇿🇼 Zimbabwe
                </Menu.Item>
                <Menu.Item key="14" href="/ASM">
                  🇦🇸 American Samoa
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout
              style={{
                padding: '0 24px 24px',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              ></Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
