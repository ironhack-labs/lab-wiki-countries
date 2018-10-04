import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import countries from './countries.json'
import {NavLink} from 'react-router-dom'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
    state ={
        countries : {}
    }
    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >

                    <SubMenu className="menu" key="sub1" title='Wiki Countries'>
                        <MenuItemGroup key="g1" title="List of Countries">
                            {countries.map((c,i)=> <Menu.Item key={i}><NavLink to={`/detail/${c.cca3}`}>{c.flag}{c.name.common}</NavLink></Menu.Item>)}
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>

            </div>
        );
    }
}

export default App;


/**<NavLink activeClassName='ihatemyboss' exact to='/detail' >{paises.map((product, key)=><CountryDisplay {...product} key={key}/>)}</NavLink>

 <Routes/>
 **/
