import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import React from 'react';

const NavBar = () => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'CountryList', path: '/countries' },
  ];

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        items={pages.map((page, index) => {
          const key = index + 1;
          return {
            key,
            label: (
              <Link key={key} to={page.path}>
                {page.name}
              </Link>
            ),
          };
        })}
      />
      <p style={{ color: 'white' }}>LAB - wikiCountries</p>
    </Header>
  );
};

export default NavBar;
