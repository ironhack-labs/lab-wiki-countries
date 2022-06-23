import React from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '../components/CountryDetails';

const CountryDetailsPage = ({countries}) => {
  // We want to get the id from the URL parameters
  const params = useParams();

  return (
    <>
      <CountryDetails alpha3Code={params.alpha3Code} countries={countries}/>
    </>
  );
};

export default CountryDetailsPage;
