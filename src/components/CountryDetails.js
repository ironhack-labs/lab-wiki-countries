import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails(props){
   
    const{id} = useParams();
    const[details, setDetails] = useState("")
    let bigId = id.toUpperCase()
    console.log(bigId)

// useEffect(()=>{
    
    
//     axios.get(`https://ih-countries-api.herokuapp.com/countries/${bigId}`)
//     .then(response=>{
//         setDetails(response)
//         console.log(response)
//     })
//     .catch()
// })

const filterArray = ()=>{
   
        props.countriesArr.filter((country)=>{

            {(country.alpha3Code === id) ?  
            (setDetails(country.alpha3Code))
            : (console.log("error"))}
            
                })
 
  
}


return(

    console.log(details)

)


}

export default CountryDetails;