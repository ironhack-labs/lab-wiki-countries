import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({countriesData}) => {

    const [ foundCountry, setFoundCountry ] = useState(null)
    const { countryId } = useParams();

    console.log('Pais seleccionado ', countryId)

    useEffect(() => {
        const country = countriesData.find((countryFound) => {
            return countryFound.alpha3Code === countryId;
        })

        if(country){
            setFoundCountry(country)
        }
    }, [ countryId ] )

    return(
        <div className="col-7">
        {!foundCountry && <h1>404 Country Not Found</h1>}

        {foundCountry &&(
        <>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name.common}/>
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
                        foundCountry.borders.map((border) => {
                            const countriesBorders = countriesData.find(countryBoder => countryBoder.alpha3Code === border)
                            return(
                                <li>
                                    <Link to={`/${countriesBorders.alpha3Code}`}>
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