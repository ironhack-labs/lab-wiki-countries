import React from 'react';
import { Link } from 'react-router-dom';

export const CountriesList = (props) => {
  const { countries } = props;
  console.log(countries);
  return (
    <>
      <div className="modal-scrollable-area">
        {countries.map((e) => (
          <Link to={`/${e.cca3}`}>
            <div className="card cuadro">
              <div className="App mt-3">
                <div className="d-flex">
                  <img
                    src={`https://www.countryflags.io/${e.cca2}/flat/64.png`}
                    style={{ height: '100%' }} 
                    alt=""
                  />
                  <h5 style={{ marginLeft: '20px',fontSize:'15px' }}>{e.name.common}</h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};