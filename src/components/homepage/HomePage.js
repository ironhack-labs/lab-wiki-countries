import React from 'react';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage col-7">
      <div className="container">
        <h2 className="text-primary mt-4">
          Welcome to Ironhack's WikiCountries
        </h2>
        <p className="text-primary mt-4 mx-5">
          Here you can discover important informations about your favorite
          countries!
        </p>
        <p className="text-primary mx-5">
          To start, just click on the country you wanna know more on the menu on
          the left!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
