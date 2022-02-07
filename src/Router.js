import { Routes, Route } from 'react-router-dom';
import { CountriesList, CountryDetails } from './components';
import React, { useEffect, useState } from 'react';
import countriesJSON from './countries.json';

function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<CountriesList />}></Route> */}
      <Route
        path="/:countryId"
        element={<CountryDetails countriesData={countriesJSON} />}
      ></Route>
    </Routes>
  );
}

export default Router;
