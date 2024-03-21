import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
    const [country, setCountry] = useState({});

    const { countryId } = useParams();

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => response.json())
            .then(data => {
                setCountry(data);
            })
            .catch(err => console.log(err));
    }, [countryId]);

