import React from 'react';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';

const Home = (props) => {
  console.log(props.match.params.countrycode);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ 'max-height': '90vh', overflow: 'scroll' }}
          >
            <CountriesList />
          </div>
          <div className="col-7">
            <CountryDetail
              key={props.match.params.countrycode}
              countryCode={props.match.params.countrycode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
