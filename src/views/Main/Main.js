import React from 'react';
import Navbar from '../../components/Navbar/Nabvar';

import CountriesList from '../../components/CountriesList/CountriesList';


function Main({countries}) {
  return (
    <main className="Main">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
