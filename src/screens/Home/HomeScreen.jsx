import React, { useState } from 'react'
import CountriesList from '../../components/CountriesList/CountriesList'
import CountryDetails from '../../components/CountryDetails/CountryDetails'

export default function HomeScreen() {
    const [countrySelected, setCountrySelected] = useState('')

    const selectCountry = (code) => {
        setCountrySelected(code);
    }

    return (
      <div className="d-flex justify-around">
        <CountriesList
          onSelect={selectCountry}
          className="mb-5"
        ></CountriesList>
        {countrySelected && (
          <CountryDetails code={countrySelected}></CountryDetails>
        )}
      </div>
    );
}
