import { useState } from "react";
import CountryList from '../components/CountryList/CountryList';
import countriesData from '../countries.json';

const CountriesPage = () => {
    const [countries, setCountries] = useState(countriesData);

    return (
        <>
            <CountryList countries={countries} />
            {/* <FormMovie movies={countries} setMovies={setMovies} /> */}
        </>
    );
};

export default CountriesPage;
