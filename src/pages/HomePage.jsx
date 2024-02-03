import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((countries)=>{
            console.log(countries.data)
            setCountries(countries.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    return(
        <div>
        <Navbar></Navbar>
        <div className="container" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <h1 style={{fontSize: '24px'}}>WikiCountries: Your Guide to the World</h1>
        <div className="list-group">
        {countries.length===0 && <p>...loading</p>}
        {countries.map((oneCountry)=>{
                return (
                <Link to={`/${oneCountry.alpha3Code}`} key={oneCountry._id} className="list-group-item list-group-item-action">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} alt={oneCountry.name.common} width={20} /><br />
                {oneCountry.name.common}
                </Link>
            )
            })
        }
        </div>
        
        </div>

        
        </div>
            

    )
}

export default HomePage;
