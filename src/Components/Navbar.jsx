import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className={'navbar ' + (this.props.className || '')}>
        <nav>
          <h1 className="h1-title">WikiCountries</h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
