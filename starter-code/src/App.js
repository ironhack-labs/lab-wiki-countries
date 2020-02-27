import React from 'react';

import './App.css';
import './Country.js'

// function App() {
//   return (
//     <div className="App">
      
      {/* <div id="root">
    <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-5">
            <div class="list-group">
              <a class="list-group-item list-group-item-action" href="/ABW">Aruba</a>
              <a class="list-group-item list-group-item-action" href="/AFG">Afghanistan</a>
              <a class="list-group-item list-group-item-action" href="/AGO">Angola</a>
              <a class="list-group-item list-group-item-action" href="/AIA">Anguilla</a>
              <a class="list-group-item list-group-item-action" href="/ALA">Åland Islands</a>
              <a class="list-group-item list-group-item-action" href="/ALB">Albania</a>
              <a class="list-group-item list-group-item-action" href="/AND">Andorra</a>
              <a class="list-group-item list-group-item-action" href="/ARE">United Arab Emirates</a>
              <a class="list-group-item list-group-item-action" href="/ARG">Argentina</a>
              <a class="list-group-item list-group-item-action" href="/ARM">Armenia</a>
              <a class="list-group-item list-group-item-action" href="/ASM">American Samoa</a>
              <a class="list-group-item list-group-item-action" href="/ATA">Antarctica</a>
              <a class="list-group-item list-group-item-action" href="/FLK">Falkland Islands</a>
              <a class="list-group-item list-group-item-action active" href="/FRA">France</a>
              <a class="list-group-item list-group-item-action" href="/ZWE">Zimbabwe</a>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div> */}

//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                <a class="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
                <a class="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
                <a class="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
                <a class="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
                <a class="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
                <a class="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
                <a class="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
                <a class="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
                <a class="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
                <a class="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
                <a class="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
                <a class="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
                <a class="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
                <a class="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
              </div>
            </div>
            <div class="col-sm-6">
              <h1>France</h1>
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Paris</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>551695 km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li><a href="/AND">Andorra</a></li>
                        <li><a href="/BEL">Belgium</a></li>
                        <li><a href="/DEU">Germany</a></li>
                        <li><a href="/ITA">Italy</a></li>
                        <li><a href="/LUX">Luxembourg</a></li>
                        <li><a href="/MCO">Monaco</a></li>
                        <li><a href="/ESP">Spain</a></li>
                        <li><a href="/CHE">Switzerland</a></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
