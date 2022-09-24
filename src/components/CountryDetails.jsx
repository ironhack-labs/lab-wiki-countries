import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";


// wieso muss ich hier nochmal die Array laden, ich könnte doch auch einfach die per prop rüberschicken? hat aber nicht funktioniert countries.map war error



const CountryDetails = ({countries}) => {
    const {id} = useParams()
    const [country, setCountry] = useState({})

    useEffect(() => {
    const findCountryDetails = countries.find(oneCountry => oneCountry.alpha3Code === id)
        setCountry(findCountryDetails)
         // eslint-disable-next-line
    },[id])

    console.log("details", country)


    if (Object.keys(country).length === 0) {
        return <p>Loading...</p>
    }else { 
      return (
        
        <div>
             <h1>Country Details:</h1>
             <h3>{country.name.common}</h3>
             <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='alImg'></img>
                <p>Capital: {country.capital[0]}</p>   
                <p>Area: {countries.area} km<sup>2</sup></p>        
        </div>
       
      );
    }
     
}

export default CountryDetails