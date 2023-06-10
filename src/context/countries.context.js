import { createContext, useEffect, useState } from "react"; 

import axios from "axios";

const CountriesContext = createContext()

const CountriesProvider = ({ children }) => {

    const [theseCountries, setTheseCountries ] = useState([])

    const getCountry = (thisId) => {
        return theseCountries.find((country) => country.alpha3Code === thisId)
    }

    useEffect(() => {

        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then((results) => {
                setTheseCountries(results.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])


    return (
        <CountriesContext.Provider value={{ theseCountries, getCountry }}>
            {children}
        </CountriesContext.Provider>
    )

}

export { CountriesContext, CountriesProvider}