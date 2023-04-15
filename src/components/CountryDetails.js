
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom";

function CountryDetails(props){

    const {details} = useParams();
    const {countries}=props 

   /* const [foundCountry, setFoundCountry] = useState(null); // Original Code upto Iteration 3
    useEffect(()=>{
        const country = countries.find((coun) =>{
            return coun.alpha3Code === details
        })
        if (country){
            setFoundCountry(country)
        }
    }, [details])*/

    const [apiCountry, setApiCountry] = useState(null)

    const fetchSingleCountry = () => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${details}`)
          .then(response => {
            return response.json()
          })
          .then(data => {
              setApiCountry(data)
          })
      }
    
    useEffect(()=>{
        fetchSingleCountry()
    },[details])

    

    return(
        <div>
            {!apiCountry && <h3>Country Not Found</h3>}
            {apiCountry && (
                <div>
                    <img src= {`https://flagpedia.net/data/flags/icon/72x54/${apiCountry.alpha2Code.toLowerCase()}.png`} style={{width:300}}/>
                    <h1>{apiCountry.name.official}</h1>
                    <h5>Capital: {apiCountry.capital}</h5>
                    <h5>Area: {apiCountry.area}km<sup>2</sup></h5>
                    <h5>Borders:</h5>
                    {apiCountry.borders.length===0 
                    ?
                        <span>None</span>
                    :
                        countries.map((coun)=>{
                            for(let item of apiCountry.borders){
                                if(coun.alpha3Code === item){
                                    return(
                                        <Link style={{display:'block'}} to={`/${coun.alpha3Code}`}>{coun.name.official}</Link>
                                    )
                                }
                           
                            }
                        })
                    }
                </div>
            )}
        </div>
    )
}
export default CountryDetails;