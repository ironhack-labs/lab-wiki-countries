import { useState } from "react";
import CountriesList from '../components/CountriesList';

import countriesData from '../countries.json';

const CountriesPage = () => {
    const [countries, setCountry] = useState(countriesData);

    return (
        <>
            <CountriesList countries={countries} />
        </>
    );
};

export default CountriesPage;