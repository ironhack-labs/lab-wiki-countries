import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../countries.json';
import axios from 'axios';

function CountryDetails(props) {

  const { countryId } = useParams();
  
  console.log("this is country id ", {countryId})

  const [details, setDetails] = useState({})


  const { countries } = props;

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
            {/* <div>
            <p>Borders:
            {details.borders.map((code, item) => {
              return(
                <>
                <li key={item}>
                  <Link to={`/country/${code}`}>
                    {
                      countries.find((country) => country.alpha3Code === code)
                        .name.official
                    }
                  </Link>
                </li>
                </>
              )
            })}</p> 
            
             </div> */}
        </div>
    
  );
}

export default CountryDetails;