import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";


function CountryDetails (props) {
    const { iataCode } = useParams();
    const [countryDetails, setCountryDetails] = useState({})
    // console.log('------', countryDetails)
    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${iataCode}`)
            .then( response => {
                setCountryDetails(response.data) 
                // console.log('--- get reponse', response.data)
            })
            .catch(err => console.log('Error getting data from API', err))
    }, [])

//   const findCountry = props.filter(code => code.alpha3Code === iataCode)
//   console.log(findCountry)


    return (
        <div>
            <h1>Country Details</h1>
            {/* <h2>{props.countryArr.name.common}</h2> */}
            {/* <h2>{iataCode.name.common}</h2>
            <p>Capital:</p>
            <p>Area:</p>
            <p>Borders:</p>
            <h>{props.data.name.common}</h> */}
        </div>
            )


}

export default CountryDetails