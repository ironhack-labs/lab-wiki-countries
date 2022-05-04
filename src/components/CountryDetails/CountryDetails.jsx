import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";

function CountryDetails() {

    const { id } = useParams()

    const [foundCountry, setFoundCountry] = useState({})

    useEffect(() => {           
        axios
            .get('https://ih-countries-api.herokuapp.com/countries/' + id)
            .then(({ data }) => {

                setFoundCountry(data);
            })
    }, [foundCountry])

    let flag = foundCountry.alpha2Code?.toLowerCase()

    return (
        <div>
            
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png`}></img>
            <p>El params es {id}</p>
            <p>La capital es {foundCountry.capital}</p>
            <p>El area son {foundCountry.area} km2</p>
            <p>Las fronteras son: </p>
            <ul>
                {
                    foundCountry.borders?.map((elm, idx) => {
                        return <li key={idx}><Link to={`/${elm}`}>{elm}</Link></li>
                    })
                }
            </ul>

        </div>
    );
}

export default CountryDetails;