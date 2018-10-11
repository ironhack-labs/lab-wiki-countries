import React from 'react'
import countries from '../countries.json'
import { Menu,Icon} from 'antd'
import {NavLink} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class CountryList extends React.Component{
  
  state={countries}

  render(){
    const {countries} = this.state
    return(
      <Menu
      onClick={this.handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub1" title={<span>Countries</span>}>
        <MenuItemGroup key="g1" title="Countries">
          {countries.map((country,i)=><Menu.Item key={i}><NavLink to={`/${country.cca3}`}>{country.flag} {country.name.common}</NavLink></Menu.Item>)}
        </MenuItemGroup>
      </SubMenu>
    </Menu> 
    )
  }
}

export default CountryList