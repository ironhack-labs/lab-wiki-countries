import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from '../components/NavBar';
const { Content, Footer } = Layout;

function Root() {
  return (
    <Layout>
      <NavBar />
      <Content
        style={{
          height: '100vh',
          maxHeight: 'calc(100vh - 128.09px)',
          padding: '1em 2em',
        }}
      >
        <Outlet />
      </Content>

      <Footer>By Sesma 💙</Footer>
    </Layout>
  );
}

export default Root;
