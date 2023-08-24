import { useState, useEffect } from "react"
import axios from "axios"
import { useParams , Link } from "react-router-dom";
import "./MyStyles.css";


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
        <div className="container mt-5">
    <div className="card border-0 shadow">
        <div className="card-body">
            <h2 className="card-title mb-4">Country Details</h2>
            {!foundCountry && <h3>Country not found!</h3>}
            {foundCountry && (
                <div>
                    <h2 className="mb-3">{foundCountry.name.common}</h2>
                    <p><span style={{ fontWeight: "bold" }}>Capital:</span> {foundCountry.capital}</p>
                    <p><span style={{ fontWeight: "bold" }}>Area:</span> {foundCountry.area} km²</p>
                    <p><span style={{ fontWeight: "bold" }}>Location:</span> {foundCountry.region}, {foundCountry.subregion}</p>
                    <div className="mt-4">
                        <p className="mb-2" style={{ fontWeight: "bold" }}>Borders:</p>
                        <ul className="list-unstyled d-flex justify-content-center">
                            {foundCountry.borders.map((bordering) => (
                                <li key={bordering} className="mx-3" style={{ fontWeight: "bold" }}>
                                    <Link
                                        to={`/${bordering}`}
                                        className="text-decoration-none text-success"
                                    >
                                        {bordering}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>






        )
}
        
export default CountryDetails;