import React from 'react';
import "bulma/css/bulma.css";
import "./Navbar.css"
class Navbar extends React.Component{

    render(){
        return(
            <div className="NavBar">
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item">
        Wiki - Countries
      </a>
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
              
            </div>
          </nav>
        </div>

        )
    }

}

export default Navbar;
