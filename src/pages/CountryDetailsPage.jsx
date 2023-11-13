import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";





function CountryDetails(props) {

    const [countryDetails, setCountryDetails] = useState([])
    let { countryId } = useParams();

    return(
        <h1>Country Details</h1>
    )
}

export default CountryDetails;
