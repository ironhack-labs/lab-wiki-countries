import React from 'react';

export default function ContryDetails(props) {
  console.log('lala:', props);
  const { countriesArr } = props;
  const { countryId } = props.match.params;

  const country = countriesArr.find((e) => {
    const { name, cca3 } = e;
    return cca3 === countryId;
  });
  return country.name.common;
}