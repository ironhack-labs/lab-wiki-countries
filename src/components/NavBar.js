import React from 'react'
// import { Breadcrumb } from 'antd';
import '../App.css';



const NavBar = () => {
    return (
        <nav  class="navbar has-background-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand ">
          <a class="navbar-item ">
            <h1>Wiki Countries</h1>
          </a>
        </div>
      </nav>
    )

    
}


export default NavBar


//intento 1 con antd
/* <Breadcrumb>
<Breadcrumb.Item>Wiki Countries</Breadcrumb.Item>
<Breadcrumb.Item>
  <Link href="">Countries List</Link>
</Breadcrumb.Item>
<Breadcrumb.Item>
  <Link href="">Country Details</Link>
</Breadcrumb.Item>
</Breadcrumb> */
  

//intento 2 con antd xd
    //  <Layout className="layout">
    //     <Header>
    //       <div className="logo">
    //           <h1>Wiki Countries</h1>
    //     </div>
    //       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    //     <Menu.Item key="1">nav 1</Menu.Item>
    //     <Menu.Item key="2">nav 2</Menu.Item>
    //     <Menu.Item key="3">nav 3</Menu.Item>
    //   </Menu>
    //     </Header>
    //     <Content style={{ padding: '0 50px' }}>
    //   <Breadcrumb style={{ margin: '16px 0' }}>
    //     <Breadcrumb.Item>Home</Breadcrumb.Item>
    //     <Breadcrumb.Item>Countries Lis</Breadcrumb.Item>
    //     <Breadcrumb.Item>Country Detail</Breadcrumb.Item>
    //   </Breadcrumb>
    //   <div className="site-layout-content">Content</div>
    // </Content>
    //     </Layout>