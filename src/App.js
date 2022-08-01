import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavbarWiki } from './components';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <NavbarWiki>
        {/* country list */}
        <div class="container">
          <div class="row">{/* here will go country list */}</div>
        </div>

        <div class="col-7">
          <h1>France</h1>
          <table class="table">
            <thead></thead>
            <tbody>{/* here will go country details */}</tbody>
          </table>
        </div>
      </NavbarWiki>
    </div>
  );
}

export default App;
