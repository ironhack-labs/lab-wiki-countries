import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((countries)=>{
            console.log(countries)
            const alphabeticalCountries = countries.data.sort((a,b) => a.name.common.localeCompare(b.name.common))
            setCountries(alphabeticalCountries)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    

    return(
        <div style={{maxHeight: "90vh", overflow: "scroll"}} className="container">
            <h1 style={{fontSize:"24px"}}>WikiCountries: Your Guide to the World</h1>
            {countries.map((oneCountry) => {
                return (
                    <div key={oneCountry._id} className="list-group">
                        <Link to={`/${oneCountry.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} style={{height: "30px"}} />
                            <br></br>
                            {oneCountry.name.common}
                        </Link>
                    </div>
                )
            })}
        </div>
        
        
    ) 
}

export default HomePage;
