import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";



function CountryDetailsPage() {

    const [details, setDetails] = useState([])
    const { countryId } = useParams()
    console.log(countryId)


    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => {
                setDetails(response.data)
                console.log(response.data)
            })
    }, [])


    return (
        <div>
            <h2>Country Details</h2>
        </div>
    )
}

export default CountryDetailsPage;
