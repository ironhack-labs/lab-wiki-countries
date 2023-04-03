import React from 'react';
import { detailCountries } from '../../../services/CountryService';

export const CountryDetails = () => {
  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
        alt="Country Flag"
        style={{ width: '40px', paddingBottom: '10px' }}
      />
    </div>
  );
};
