import React from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail.js'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import CountryList from './components/CountryList';

const App = () => {


  return (
    <div>
      <Navbar/>
      <div className="col-7">
         <div className="col-5" style={{ maxHeight: "90vh", float:'right'}} >
      <Switch>
          <Route exact path='/countries/:cca3' component={CountryDetail} />
      </Switch>
         </div>
         <div className="col-5" style={{ maxHeight: "90vh", overflow: 'scroll'}} >
          <CountryList />
          </div>
      </div>
    </div>
  );
}



export default App
