import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {

    let {countryId}= useParams();
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${countryId}`

    useEffect(()=>{
        axios.get(apiUrl).then((response)=>{
            setDetails(response.data);
            setLoading(false);
        })
    }, []);

    return(
        <div className="list-group">
                {loading ? <p>Loading</p> : 
            <p>{details.name.common}</p> }
            <p>{details.area}</p> 
            <p>{details.borders}</p> 
        </div>
    )
}

export default CountryDetails;
