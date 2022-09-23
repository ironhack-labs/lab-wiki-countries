import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"


const CountryDetails = ({countries}) => {
    const {id} = useParams()
    const [country, setCountry] = useState({})

    useEffect(() => {
      const currentCountry = countries.find(eachCountry => eachCountry.alpha3Code === id)
        setCountry(currentCountry)
    // eslint-disable-next-line
    }, [id])
    console.log(country);
    // country.hasOwnProperty('name')
    // set the inicial statye to null en then check if there is a not null state
    if (Object.keys(country).length === 0) {
    return <p>Loading...</p>
    }else {
        return (
        
            <div className="countryDetails">
                <h3>{country.name.official}</h3>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='alImg'></img> 
                
                <p>Capital: {country.capital[0]}</p> 
                <p>Area: {country.area} km<sup>2</sup></p> 
                <div className="borders">
                <p>Borders:
                </p> 
                <ul>
                    {country.borders.length !== 0 ? country.borders.map(border3code=>
                    <Link to={`/${border3code}`}><li>
                        {countries.find(eachCountry => eachCountry.alpha3Code === border3code).name.official}
                    </li></Link>
                    ) : <span>This Country has no Border country</span>}
                    
                </ul>
                </div>
                
                
                
                    
            </div>
        )
    }
  
}

export default CountryDetails