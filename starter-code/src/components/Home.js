import React from 'react'
import CountryList from './CountryList';
import data from '../data.json'
import CountryDetail from './CountryDetail';
import { Route } from 'react-router-dom';

const Home = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <CountryList data={data}/>
        </div>
          
        <div className="col-7">
          <Route exact path="/:cca3" component={ CountryDetail } />
        </div>
      </div>
    </div>
  )
}

export default Home