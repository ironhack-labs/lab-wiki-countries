import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {

    const {countryId} = useParams();

    const [country,setCountry] = useState(null);
    const [fetching, setFetch] = useState(true);

    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`).
        then((response)=>{

            if(response && response.data){
            setCountry(response.data);
            console.log(response.data)
            setFetch(false)
            }
        })
    },[countryId])

    return(
        <div>
            {fetching && <h2>⚙️Loading...⚙️</h2>}
            {!country && <h4>Country not found 😔</h4>} 
            {country && (
            <div>
            <h1 style={{fontSize: "24px", fontWeight: "bold"}}>
                Country Details
            </h1>
            <div>
            <h2>{country.name.common}</h2>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
            <table className="table">
            <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area}km2</td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map((border)=>{
                                return(
                                    <Link key = {border} to={`/${border}`} className="list-group-item list-group-item-action">{border}</Link>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

            </div>
            )}
        </div>
    )
}

export default CountryDetails;
