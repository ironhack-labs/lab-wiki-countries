import React from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
const { Header } = Layout

const Navbar = () => {
    return (
        <Header>
            <Menu theme='dark' mode='horizontal'>
                <Menu.Item style={{ color: "white", fontSize: '2.4rem' }} key="1">WikiCountries</Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar
