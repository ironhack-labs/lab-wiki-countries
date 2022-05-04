import { useState, useEffect } from "react";
import CountryDetails from "../CountryDetails/CountryDetails";


function CountriesList({ countries }) {
    const [countries, setCountries] = useState([])

    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fecthCountries()
    }, [])

    const fecthCountries = () => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(({ data }) => {
                setCountries(data)
                setFetching(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>COUNTRIES</h2>
            <ul>
                {fetching ? <h1>Cargando</h1> : countries.map(eachCountry => <CountryDetails key={eachCountry._id} {...eachCountry} />)}
            </ul>
        </>
    );
}

export default CountriesList;


// return (
//     <div>
//         <h2>COUNTRIES</h2>
//         <ul>
//             {countries.map(eachCountry => {
//                 return (
//                     <div key={eachCountry.alpha3Code}>
//                         <Link to={`/${eachCountry.alpha3Code}`}> <li>{eachCountry.name.common}</li></Link>
//                     </div>
//                 )
//             })}
//         </ul>

//     </div>
// );