import React from 'react';
import { Route} from "react-router-dom";
import Menu from './components/Menu';
import Detail from './components/Detail';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';  

function App() {
  return (
    <div className="App">
   
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">CountryWiki</NavbarBrand>
      </Navbar>
      <Route  path='/' component={Menu} />
      <Route  path='/country/:cca3' component={Detail} />
     
    </div>
  );
}

export default App;
