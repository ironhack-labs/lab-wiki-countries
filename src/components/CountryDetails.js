import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  //   const [country, setCountry] = useState(null)

  //   const getCountry = () => {
  //     const countryDetail = countries.find((country) =>
  //         country.alpha3Code === id);
  //     setCountry(countryDetail)
  //   };

  //   useEffect(() => {
  //     getCountry()
  //   }, [id]);

  const countryDetail = countries.find((country) => country.alpha3Code === id);

  return (
    <div>
      CountryDetails {id} {countryDetail && countryDetail.name.common}{' '}
    </div>
  );
};

export default CountryDetails;
