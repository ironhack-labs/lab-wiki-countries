import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryService from '../services/CountryService';
import { useEffect } from 'react';
import CountryDetails from '../components/CountryDetails';

export default function CountryDetailsPage() {
  const { countryId } = useParams();
  const [country, setCountry] = useState();
  const service = new CountryService();

  const getCountry = async () => {
    const countryApi = await service.getCountry(countryId);  
    setCountry(countryApi);
  }

  useEffect(() => {
    getCountry()
  }, [ countryId ]);

  console.log({country});

  return (
    <div>
        <h1>Country Details</h1>
        {!!country ? <CountryDetails {...country}/> : "Loading..."}
    </div>
  )
}
