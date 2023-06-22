import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
    const { countryId } = useParams();

    const [countriesDetails, setcountriesDetails] = useState({});

    const baseURL = "https://ih-countries-api.herokuapp.com/countries"
    useEffect(() => {
        axios.get(`${baseURL}/${countryId}`)
            .then(response => {
                setcountriesDetails(response.data);
            })
            .catch(e => console.log(e))
    }, [])

        return (
            <div key={countriesDetails.countryId} className="box">
            <h1>{countriesDetails.name}</h1>
            Capital: {countriesDetails.capital} <br />
            Region: {countriesDetails.region} <br />
            Subregion: {countriesDetails.subregion} <br />
            Language: {countriesDetails.languages?.map(lang => lang.name).join(", ")}
 <br />
            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
        )
}

export default CountryDetails

