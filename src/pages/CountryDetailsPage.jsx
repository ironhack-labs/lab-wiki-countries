import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";



function CountryDetails() {

    const { countryId } = useParams()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => {

                setCountry(response.data)

            })
            .catch(error => {
                console.error('There was an error!', error);
            })
    }, [countryId])




    return (
        <>
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</h1>
            <div>
                {country ?
                    <>
                        <h1>{country.name.common}</h1>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                        <p>Capital: {country.capital[0]}</p>
                        <p>Area:{country.area}</p>
                        <p>Borders:</p>
                        {
                            country.borders.map(elm => {
                                return (
                                    <article key={elm}>
                                        <Link to={`/${elm}`}>{elm}</Link>
                                    </article>
                                )

                            })
                        }
                    </>
                    :
                    <p>loading...</p>
                }

            </div>

        </>



    )
}

export default CountryDetails;
