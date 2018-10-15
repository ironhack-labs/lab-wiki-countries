import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import countries from '../countries.json'
import {NavLink} from 'react-router-dom'



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;




class CountryList extends Component {
  state ={
    countries : {countries}
  }



  render() {
    return (
      <div>


        <Menu
        onClick={this.handleClick}
        style={{ width: 150 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline">



        <SubMenu key="sub1" title='Wiki Countries'>
          <MenuItemGroup key="g1" title="List of Countries">
            {countries.map((c,i)=> <Menu.Item key={i}><NavLink to={`/detail/${c.cca3}`}>{c.flag} {c.name.common}</NavLink></Menu.Item>)}
          </MenuItemGroup>
        </SubMenu>
      </Menu>
      </div>
    );
  }
}




export default CountryList;


/*

import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

*/