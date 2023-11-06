import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function HomePage() {
    const [countries ,setcountries] = useState([])

    const apiUrl ="https://ih-countries-api.herokuapp.com/countries"
    
    const[fetching, setFetching] =useState(true)
    
    
    useEffect (()=>{
        axios.get(apiUrl).then((response)=>{

            setcountries(response.data)
            setFetching(false)
        })
    },[])




    return (
        <div>
          <h1>WikiCountries: Your Guide to the World</h1>
          <ul>
            {fetching?
            <p>Loading...</p>:
            countries.map((country) => (
              <li key={country._id}>
                
                <Link to={`/${country.alpha3Code}`}>
                  <img className="flag-Name"
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`${country.name.official} Flag`}
                  />

                <h3>{country.name.official}</h3>

                </Link>
              </li>
            ))}
          </ul>
        </div>
      );

    
      
    }
    

    export default HomePage
/*
 const [pokemons,setPokemons] =useState([]);

    //Store in State the information of wther the  component is feching data from the Api or not 

    const [fecthing,setFetching] = useState(true)

    const apiUrl ="https://pokeapi.co/api/v2/pokemon/blastoise"


    useEffect (()=>{
        axios.get(apiUrl).then((response)=>{

            setPokemons(response.data)
            setFetching(false)
            console.log(pokemons)
        })
    },[])

    return(
<div>
<h3>List of Pokemons</h3>
{fecthing &&  <p>Loading</p>}

{!fecthing &&

        <div>   
            <img src={pokemons.sprites.front_default} className ="logo"></img>

        <h3> {pokemons.name}</h3>
        <h4> {pokemons.id} </h4>
        </div>
}
</div>    

    )
}*/