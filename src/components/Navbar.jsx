import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/">LAB - WikiCountries</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
