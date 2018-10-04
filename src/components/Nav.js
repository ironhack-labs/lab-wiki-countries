import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import 'antd/dist/antd.css'
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Nav extends Component{

    render(){
        const paises = this.props.info
        return(
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline">
                    <SubMenu key="sub1" title="List">
                    <MenuItemGroup key="g1">
                        {paises.map((pais, i) => <Menu.Item key="1"><NavLink key={i} to={`/detail/${pais.cca3}`}>{pais.flag}  {pais.name.common}</NavLink>     </Menu.Item>)}
                    </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default Nav