import React from 'react';

import { Link } from 'react-router-dom';
import CountriesList from '../components/CountriesList';

function HomePage() {
  return (
    <div>
      <CountriesList />
    </div>
  );
}

export default HomePage;
