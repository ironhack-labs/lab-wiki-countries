import "./CountryDetails.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CountryName from "./CountryName"

export default function CountriesDetails(props){
    
    const [ countrySelected,setCountrySelected ]=useState(null)
    const countriesURL = "https://ih-countries-api.herokuapp.com/countries"

    //for iteration 1-2
    const { countriesArr } = props // for iteration 1-2
    // const countrySelected= countriesArr.find(countryObj=>countryObj.alpha3Code===countryId)
    
    const { countryId } = useParams() 

    useEffect(()=>{
        axios.get(countriesURL+"/"+countryId)
        .then(response=>{
            console.log(response.data)
           
            setCountrySelected(response.data)
        })
        .catch(e=>{
            console.log("something happened getting the country in the DB",e)
        })
    },[countryId])
    
    const countryData=()=>{
        return (
          <>
            <div>
              <img
                src={
                  'https://flagpedia.net/data/flags/icon/72x54/' +
                  countrySelected.alpha2Code.toLowerCase() +
                  '.png'
                }
                alt="flag"
              />
            </div>
            <h2>{countrySelected.name.common}</h2>

            <h3>
              Area: {countrySelected.area} km<sup>2</sup>{' '}
            </h3>
            <div className="container-row">

              <h3 className="borders">Borders:</h3>
              <div className="container-column">
                {countrySelected.borders.map((borderCountry) => (
                  <Link key={borderCountry} to={'/' + borderCountry}>
                    <CountryName
                      countriesArr={countriesArr}
                      countryId={borderCountry}
                    />
                  </Link>
                ))}
              </div>

            </div>
          </>
        );
    }
    
    return(
        <div className="country">

            {countrySelected===null ? "select a country": countryData() }
            
        </div>
    )
}