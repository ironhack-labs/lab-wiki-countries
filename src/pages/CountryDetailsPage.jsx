import { useState, useEffect } from "react"
import axios from "axios"
import { useParams , Link } from "react-router-dom";


function CountryDetails() {
    const [fetching, setFetching] = useState(true)
    const{countryId} = useParams()
    const [foundCountry, setFoundCountry] = useState(null)


    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((response) => {
            setFoundCountry(response.data);
            setFetching(false)
            console.log(response.data)
        })
        .catch((error) => {
            setFetching=true;
        })
    }, [countryId])


    return(
        <div>
            <h2>Country Details</h2>
                <div>
                    {!foundCountry && <h3>Country not found!</h3>}
                    {foundCountry && (
                        <div>
                            <h2>{foundCountry.name.common}</h2>
                            <p>Capital: {foundCountry.capital}</p>
                            <p>Area: {foundCountry.area} km²</p>
                            <div>
                                {foundCountry.borders.map((bordering) => {
                                    return(
                                        <Link to={`/${bordering}`}>{bordering}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        )}
                    
                </div>
        </div>
        )
}
        
export default CountryDetails;