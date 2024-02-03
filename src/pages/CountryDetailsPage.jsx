import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails() {

    const [country, setCountry] = useState(null)

    const {countryId} = useParams()

    useEffect(() =>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((oneCountry)=>{
            setCountry(oneCountry.data)
            console.log(oneCountry.data)
        })
    }, [useParams()])


    return(
        <div className='container'>
            <h1 style={{fontSize:"24px", fontWeight: "bold"}}>Country Details</h1>
            <br></br>
            {country ?
                <div>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                    <h1>{country.name.common}</h1>
                    <br/>
                    <table className="table">
                        <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{width: "30%"}}>Capital</td>
                                    <td>{country.capital}</td>
                                </tr>
                                <tr>
                                    <td style={{width: "30%"}}>Area</td>
                                    <td>{country.area}km2</td>
                                </tr>
                                <tr>
                                    <td style={{width: "30%"}}>Borders</td>
                                    <td>
                                        <ul>
                                            {country.borders.map((oneBorder) => {
                                                return (
                                                    <div>
                                                        <Link to={`/${oneBorder}`}><li style={{listStyleType:"none"}}>{oneBorder}</li></Link>
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div> 
            : <p>...Loading</p>}
        </div>
    )
}

export default CountryDetails;
