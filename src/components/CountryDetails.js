// import countries from '../countries.json';
import { useParams } from 'react-router-dom';
import {useEffect,useState} from "react"
import countryData from "../countries.json"
import {Link} from "react-router-dom"
import axios from 'axios';



const CountryDetails = (props) => {
const {countryId} = useParams();
const [foundCountry,setFoundCountry] = useState(null)
const [countryArr,setCountryArr] = useState(null)
 



    useEffect(() => { 
        
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
    .then((response) => {
        console.log(response.data);
        setFoundCountry(response.data)
    })
    
    .catch((e) => {console.log("There was an error", e)})
}, [countryId]);


useEffect(() => { 
        
    axios.get(`https://ih-countries-api.herokuapp.com/countries/`)
.then((response) => {

    setCountryArr(response.data)
})

.catch((e) => {console.log("There was an error", e)})
}, [countryArr]);
        // https://ih-countries-api.herokuapp.com/countries/USA
        
        
        // <== ADD
        // const country = countriesArr.find((countryObj) => {
        //   return countryObj.alpha3Code === countryId;
        // })
     
        // if (country) {
        //   setFoundCountry(country);
        // }
        
   
    // }, [countryId]);
    
      if (!foundCountry) {  return <p> Loading... </p>; }
  return (
    <div>
 <p></p>

        <p> Area:{foundCountry.area}</p> 
        <p> {foundCountry.name.common}</p>
        <p>Capital: {foundCountry.capital}</p> 
       <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}/>
    <p>Borders: {foundCountry.borders.map(elm => {return (<p>{elm}</p>)})}</p>
     
       </div>
  )
}

export default CountryDetails