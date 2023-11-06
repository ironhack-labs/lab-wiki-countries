import { useState, useEffect } from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom"
import { Card, Divider} from "antd";

function CountryDetails() {
    const [details, setDetails] = useState([])
    let {countryId} = useParams();
    const getApi = `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(getApi).then((response)=>{
            setDetails(response.data)
            setLoading(false);
        })
      }, [countryId])
      
    return(
        <Card>
            <Divider>Country Details</Divider>
            {loading ? <p>Loading...</p> : 
                <Card id="details">
                    <img id="details-img"src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}/>
                    <h4>{details.name.common}</h4>
                    <p>Capital: {details.capital}</p>
                    <p>Area: {details.area} km2</p>
                    <div id="borders">
                    <p>Borders:</p> 
                    {details.borders.map((border)=>{
                        return(
                            <div id="borders-list"key={border}>
                                <Link to={`/${border}`}>{border}</Link>
                            </div>
                        )
                    })}
                    </div>
                </Card>
            }
        </Card>
    )
}

export default CountryDetails;
 