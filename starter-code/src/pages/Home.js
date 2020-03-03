import React from 'react';
import countries from '../countries.json';
import CountryList from '../components/CountryList';

const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{"maxHeight": "90vh", "overflow": "scroll"}}>
          <CountryList countries={countries}/>
        </div>
        <div className="col-7">
        </div>
      </div>
    </div>
  );
};

export default Home;