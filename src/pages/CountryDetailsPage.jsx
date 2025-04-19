import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function CountryDetails({url}) {
    const [country, setCountry] = useState(null)
    const { countryId } = useParams();
    const headerStyle = {
        fontSize: "24px",
        fontWeight: "bold"
    }

    const getCountries = () => {
        console.log("fetching country data...")
        axios.get(`${url}/countries/${countryId}`)
          .then(res => {
            setCountry(res.data)
            console.log(country)
        }).catch(err => console.log(err))
      }

    const getFlagLink = (country) => {
        const flagCode = country.alpha2Code.toLowerCase();
        return `https://flagpedia.net/data/flags/icon/72x54/${flagCode}.png`
    }
    
      useEffect(() => {
        console.log("fetching country details...")
        getCountries();
      }, [countryId])




    return (
        <>
             {country === null && <p>Loading country...</p>}
             {country !== null && 
             <div className="container"> 
                <img src={getFlagLink(country)} alt="country-flag" />
                <p style={headerStyle}>Country Details</p>
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map((border) => {
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
                </div>
                }
        </>
    )
}

export default CountryDetails;
