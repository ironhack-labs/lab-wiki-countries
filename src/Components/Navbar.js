import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.title}>Wiki Countries</div>
      </Link>
    </div>
  );
};

export default NavBar;
