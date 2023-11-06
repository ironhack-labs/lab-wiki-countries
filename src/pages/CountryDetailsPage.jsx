import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetailsPage() {
    const param= useParams();
    const short= param.alpha3Code;
    const [fetching, setFetching] = useState(true)
    const [country, setCountry] = useState({})

    let countryJSON = "https://ih-countries-api.herokuapp.com/countries"

    useEffect(()=>{

    axios.get(countryJSON).then((response)=>{
        setFetching(false);

        let selected=response.data.find((country) =>{
            return country.alpha3Code === short
        })
        
        setCountry(selected)
        console.log(selected)
        

    })
},[short])  

    return(
        <div>
        {fetching && <h1>Loading</h1>}
        {!fetching && <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
            {country.name.common}
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} Km²</p>
            <p>Borders:</p>
            <ul>
                {country.borders.map((border,index)=>{
                    return(
                    <Link to={`/${border}`}  key={index}><li>{border}</li></Link>
                    )
                })}
            </ul>
            </div>}
        </div>
    )

}

export default CountryDetailsPage;
