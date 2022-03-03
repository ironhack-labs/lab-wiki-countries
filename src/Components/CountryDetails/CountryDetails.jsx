import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';

function CountryDetails() {

    const [foundCountry, setFoundCountry] = useState(null)
    const [countryBorders, setCountryBorders] = useState([])

    const { id } = useParams();

    console.log(id)

    useEffect(() => {
    
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    .then((response) => {

      setFoundCountry(response.data)
      setCountryBorders(response.data.borders)

      console.log(response.data)
      console.log('border',response.data.borders)

    })
  
  }, [id])

  

  return (

    <div className="col-7">

{foundCountry &&
        
       ( 
       <>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}/>
            <h1>{foundCountry.name.common}</h1>
                  
                    <h3>Capital: {foundCountry.capital}</h3>
                    <h3>Area: {foundCountry.area}km</h3>
                    <h3>Borders: </h3>
                    
                            {countryBorders.map((border)=> {

                                return <Link className="border-link" to={`/${border}`}>{border}</Link>

                            })}

            </>
          
  )}

  </div>
  )}

export default CountryDetails