import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import countriesData from "./../countries.json"


function CountriesList() {

    const [countries, setCountries] = useState([])


    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries`)
            .then((response) => response.json())
            .then((countriesData) => setCountries(countriesData))
    }, [])



    // console.log('Paises', countriesData)



    return (
        <>
            {
                countries.map((country) => {
                    return (
                        <div key={country.alpha3Code}>
                            <Link to={`/countries/${country.alpha3Code}`} >
                                <h3>{country.name.common}</h3>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )


}


export default CountriesList