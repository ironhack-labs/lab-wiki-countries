import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService";
import ListItem from "../components/ListItem/ListItem";



function HomePage() {
    const [countries, setCountries] = useState([])

useEffect(() => {
    getCountries()
    .then((countriesApi) => {
        setCountries(countriesApi)
    })
    .catch((err) => console.error(err))
}, [])



    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div>
                <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            </div>
            <div >
                {countries.map((country) => {
                return (
                <ListItem key={country.name.common} country={country} />
                )
            })}
            </div>
        </div>
    )
}

export default HomePage;


