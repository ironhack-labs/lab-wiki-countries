import React from 'react'
import {Menu} from 'antd'
import { Link } from 'react-router-dom'
import { Header } from 'antd/es/layout/layout'

function Navbar() {
  const pages = [
    { name: "CountryList", path: "/countrylist" }
  ]

  return (
    <Header>  
      <Menu
        theme="dark"
        mode="horizontal"
        items={pages.map((page, index) => {
          const key = index + 1
          return {
            key,
            label: (
              <Link key={key} to={page.path}>
                {page.name}
              </Link>
            )
          }
        })}>
      </Menu>    
  </Header>
  )
}

export default Navbar