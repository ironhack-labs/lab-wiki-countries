import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../countries.json';
import axios from 'axios';

function CountryDetails(props) {

  const { countryId } = useParams();
  
  console.log("this is country id ", {countryId})

  const [details, setDetails] = useState({})


  useEffect(() => {
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((response) => {
            setDetails(response.data)
            console.log(response.data)
        })
        .catch(e => console.log("error getting country details", e));
    }, [countryId])



  return (
    
        <div>
            
            {details ? <p>Printing country details....</p> : <p>Loading details...</p>}

            <p>Country: {details.name}</p>
            <p>Country code: {details.alpha3Code}</p>
            
            {/* <p>Borders:
            {details.borders.map((item) => {
              return(
                <>
                  {item}
                </>
              )
            })}</p> 
             */}
      
        </div>
    
  );
}

export default CountryDetails;