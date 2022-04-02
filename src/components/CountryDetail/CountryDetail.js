import react, { useEffect, useState  } from "react";
import { Redirect } from 'react-router'
import { Link, useNavigate, useParams } from "react-router-dom";
import { countryDetail } from "../../services/CountriesService/CountriesService";

const CountryDetail = () => {
    const { name } = useParams()
    const [loading, setLoading] = useState(true)
    const [country, setCountry] = useState({})

    useEffect(() => {
        countryDetail(name)
            .then(countryFound => {
                setCountry(countryFound)
                setLoading(false)
            })
    }, [name])

    return(
        <div className="col-7">
            { loading ? <p>Loading...</p> :
            <>
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
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map(country => {
                            return(
                                <Link key={country} to={`/countries/${country}`}><li>{country}</li></Link>
                            )
                        })}
                    
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </> 
            }
          </div>
    )
}

export default CountryDetail