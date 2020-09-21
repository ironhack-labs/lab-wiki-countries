import React from 'react'
import { Layout, Menu,  } from 'antd';
import {Link} from 'react-router-dom'

const { Header } = Layout;


const NavBar = () => {
    return (
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1"><Link to='/'>Wiki Countries</Link></Menu.Item>
      </Menu>
    </Header>
  </Layout>
    )
}

export default NavBar
