import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({countriesData}) => {

    const [ foundCountry, setFoundCountry ] = useState(null)
    const { countryId } = useParams();

    useEffect ( () =>{
        async function fetchApi(){
          const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
          const countriesApiId = await response.json();
          setFoundCountry(countriesApiId)
        }
        fetchApi();
      },[countryId])

    
    return(
        <div className="col-7">
        {!foundCountry && <h1>404 Country Not Found</h1>}

        {foundCountry &&(
        <>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name.common} width={"200px"}/>
        <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {`${foundCountry.area} km`}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {
                        foundCountry.borders.map((border, i) => {
                            const countriesBorders = countriesData.find(countryBoder => countryBoder.alpha3Code === border)
                            return(
                                <li key={i}>
                                    <Link to={`/${countriesBorders.alpha3Code}`} >
                                        {countriesBorders.name.common}
                                    </Link>
                                </li>  
                            )   
                        })
                      }

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