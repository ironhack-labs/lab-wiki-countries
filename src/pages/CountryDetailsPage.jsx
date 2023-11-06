import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CountryDetails() {

    const [country, setCountry] = useState([]);
    let {countryId} = useParams();
    const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    const [fetching, setFetching] = useState(true);
    


    useEffect(() =>{
      axios.get(apiURL).then((response)=>{
          setCountry(response.data);
          setFetching(false);
          console.log("debugging")
      })
    }, [countryId])

    console.log(country)

    return(

        <div className="details">
            {fetching && <p>Loading...</p>}
            {!fetching && 
            <div className="details-country">
              <h4>Country Details</h4>
              <div>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                <h3>{country.name.common}</h3>
              </div>
              <div>
              <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area }km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {country.borders.map((border)=>{
                  return(
                    <ul key={border}>
                      <li>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    </ul>
                  )
                  
                })}
              </td>
            </tr>
          </tbody>
        </table>
              </div>
            </div>
            }
        </div>
    )
}

export default CountryDetails;
