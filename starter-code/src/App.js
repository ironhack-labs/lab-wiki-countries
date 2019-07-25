import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
      
<nav className="navbar navbar-light bg-primary">
  <a className="navbar-brand" href="/">
    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
  </a>
 <ul className="navbar-nav mr-auto">
   <li className="text-white">WikiCountries</li>
 </ul>
</nav>
        </div>
        <div className="row">
        <div className="col-5">

        <div className="media my-1">
          <img src="..." class="mr-3" alt="..."/>
          <div className="media-body">
          <h5 >Country Media heading</h5>
          </div>
        </div>

        <div className="media my-1">
          <img src="..." class="mr-3" alt="..."/>
          <div className="media-body">
          <h5 >Country Media heading</h5>
          </div>
        </div>

        </div>
          <div className="col-7">


          <table class="table">
            <thead>
              <tr>
                
                <th colspan="2" className="">First</th>
               
               
              </tr>
            </thead>
            <tbody>
              <tr>
               
                <td>Mark</td>
                <td>Otto</td>
               
              </tr>
              <tr>
                
                <td>Jacob</td>
                <td>Thornton</td>
               
              </tr>
              <tr>
               
                <td>Larry</td>
                <td>the Bird</td>
              
              </tr>
            </tbody>
          </table>


          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
