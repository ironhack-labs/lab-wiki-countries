import React from 'react';
import countriesArr from '../countries.json';

export default function Home() {
  const flagsCarousel = countriesArr.map((country) => {
    return (
      <div
        key={country.alpha3Code}
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`}
            />
          </div>
        </div>
      </div>
    );
  });
  return <div>{flagsCarousel}</div>;
}
