import React from 'react';
import Navbar from '../../components/Navbar/Nabvar';
import CountriesList from '../../components/CountriesList/CountriesList';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import { useParams } from 'react-router-dom';

const Country = ({ countries }) => {
  const { countryId } = useParams();

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
          <CountryDetails countries={countries} countryId={countryId} />
        </div>
      </div>
    </main>
  );
};

export default Country;
