import { useState, useEffect } from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom"

function CountryDetails() {
    const [details, setDetails] = useState([])
    let {countryId} = useParams();
    console.log(countryId)
    const getApi = `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(getApi).then((response)=>{
            setDetails(response.data)
            console.log(getApi)
            console.log(response.data)
            setLoading(false);
        })
      }, [countryId])
      
    return(
        <div>
            <h3>Country Details</h3>
            {loading ? <p>Loading...</p> : 
                <div>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}/>
                    <h4>{details.name.common}</h4>
                    <p>Capital: {details.capital}</p>
                    <p>Area: {details.area} km2</p>
                    <p>Borders:</p>
                    {details.borders.map((border)=>{
                        return(
                            <div key={border}>
                                <Link to={`/${border}`}>{border}</Link>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default CountryDetails;
 