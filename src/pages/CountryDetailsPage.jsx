import { getCountry } from "../services/CountriesService";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function CountryDetails() {
const {countryId} = useParams();
const [loading, setLoading] = useState(true)
const [country, setCountry] = useState(null)

useEffect(() => {
  getCountry(countryId)
  .then((country)=>{
    console.log(country)
    setCountry(country)
    })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    setLoading(false);
  });
}, [countryId])

if (country === null){
  return <p>loading...</p>
}
    return (
        <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
{loading ? <p>loading</p> : (
  <>
  <h1>{country.name.common}</h1>
  <img 
  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
  alt={country.name.common}
  width={50}></img>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.name.common}</td>
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
                  {country.borders.map((border, i)=>(
                    <li key={i}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  ))}
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </>
      )}
        
        
      </div>
    )
}

export default CountryDetails;
