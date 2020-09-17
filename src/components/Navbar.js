import React from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
const { Header } = Layout

const Navbar = () => {
    return (
        <Header style={{ position: "fixed", top: 0, left: 0, width: '100%', zIndex: 2, height: 65 }}>
            <Menu theme='dark' mode='horizontal'>
                <Menu.Item style={{ color: "white", fontSize: '2.4rem' }} key="1">WikiCountries</Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar
