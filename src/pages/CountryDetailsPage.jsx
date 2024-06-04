import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function CountryDetails() {
  const [country, setCountry] = useState(null)
  const {countryId} = useParams()


  const getCountriesDetails = async (id) => {

    try {
  const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        
        console.log(response.data)
        setCountry(response.data)
    } catch (error) {
        console.log('error fetching countries');
    }
    }
  

    useEffect(() => {
      getCountriesDetails(countryId)
    }, [countryId])
    
  //const newCountries = countries.find(country => country._id === alphaCode)


    return (
        <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

        {!country && <p>Loading...</p>}
        {
          country && (
            <>
        <h1>{country && country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital}</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area}</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map(border => {
                    return (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

            </>
          )
        }


              </div>

    )
}


export default CountryDetails;

