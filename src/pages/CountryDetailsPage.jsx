import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"




function CountryDetailsPage() {

    const [country, setCountry] = useState(null);

    const { countryId } = useParams();
    console.log(countryId)

    useEffect(() => {
        console.log('hi')
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId.toUpperCase()}`).then((theCountry) => {
            setCountry(theCountry.data)
            console.log(theCountry.data)
        }).catch((error) => {
            console.error("Error fetching the country details:", error);
        });


    }, [countryId]);

    if (!country) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h1>Country Details</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
            <h2>{country.name.common}</h2>
            <div className="info">
                <div className="capital">
                    <h4>Capital</h4> <p>{country.capital}</p>
                </div>
                <hr />
                <div className="area">
                    <h4>Area</h4> <p>{`${country.area} km2`}</p>
                </div>
                <hr />
                <div className="borders">
                    <h4>Borders</h4>
                    <ul style={{ listStyleType: 'none'}}>
                    {country.borders.map((border) => {
                        return (
                            <Link to={`/${border.toLowerCase()}`} key={country.border}><li>{border}</li></Link>
                        )
                    })}
                    </ul>
                </div>
                <hr />
            </div>
            <Link to={'/'}><button>Back</button></Link>
        </div>
    )
}

export default CountryDetailsPage