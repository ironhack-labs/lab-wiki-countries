import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
    const [country, setCountry] = useState([])
    let {countryId} = useParams();
    const countryAPI = `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(countryAPI).then((response)=>{
            setCountry (response.data)
            setLoading(false)
        })
    }, [countryId])

    console.log(country)
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading &&  <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

        <h1>{country.name.common}</h1>

       <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {country.borders.map((border)=>{
                    return (
                        <div key={border}>
                        <Link to={`/${border}`}><li>{border}</li></Link>
                        </div>
                    )
                })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>}
        </div>
    )
}
export default CountryDetails;
