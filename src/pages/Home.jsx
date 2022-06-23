import React from 'react';
import { Outlet } from 'react-router-dom';

import CountriesList from '../components/CountriesList';

const Home = ({countries}) => {
  return (
    <div>
      {/* // <!-- Bootstrap container wrapper div --> */}
      <div className="container">
        {/* <!-- Bootstrap row wrapper div --> */}
        <div className="row">
          <CountriesList countries={countries}/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
