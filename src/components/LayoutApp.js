import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Layout, Menu } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Header, Content, Sider } = Layout;


function LayoutApp({children}) {
    const [countries, setCountrys] = useState([])
    async function getData(){
        const { data } = await axios.get("https://countries.tech-savvy.tech/countries")
        setCountrys(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to="/"><Title style={{color: "white"}}>IronConutries</Title></Link></Menu.Item>

            
          </Menu>
        </Header>
        <Layout>
          <Sider width={400} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >   
            {countries?.map((e, i) => (
                <Menu.Item key={i}><Link to={`/${e.cca3}`}>{e.name.common}</Link></Menu.Item>
                
            ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default LayoutApp
