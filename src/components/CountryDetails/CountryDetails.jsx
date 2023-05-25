import { Link, useParams } from "react-router-dom";
import "./CountryDetails.css"
import axios from 'axios';
import { useState, useEffect } from "react";



const CountryDetails = () => {

    const { country_code } = useParams()

    //  const selectedCountry = countries.find(elm => elm.alpha3Code === country_code)


    const [selectedCountry, setSelectedCountry] = useState()

    useEffect(() => {

        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${country_code}`)
            .then(responseFromApi => setSelectedCountry(responseFromApi.data))
            .catch(error => console.error(error));

    }, [country_code]);

    if (!selectedCountry) {
        return <div>Loading...</div>;
    }

    const imageUrl = `https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`


    return (
        // <h1>PESADILLA</h1>
        <div className="card" key={selectedCountry.alpha3Code}>
            <img src={imageUrl} alt="" />
            <h1> {selectedCountry.name.common} </h1>
            <hr></hr>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Area: {selectedCountry.area} </p>
            <p> Borders:</p>
            {
                selectedCountry.borders.map(elm => <Link to={`/countries-details/${elm}`}> <p>{elm}</p> </Link>)
            }


        </div>

    )
}

export default CountryDetails