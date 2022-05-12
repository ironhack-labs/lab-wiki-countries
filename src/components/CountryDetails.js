import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../countries.json';
import axios from 'axios';

function CountryDetails(props) {

  const { countryId } = useParams();
  
  const [details, setDetails] = useState([])
  //console.log(details);

  // even tried ${details.alpha3Code}, wont pass the axios get request at all
  useEffect(() => {
      axios.get(`https://ih-countries-api.herokuapp.com/${countryId}`)
        .then((response) => {
            setDetails(response.data)
            console.log(response.data)
        })
        .catch(e => console.log("error getting country details", e));
    }, [countryId])



  return (
    
        <div>
            <p>Test for details</p>
            {/* <h2>{details.name}</h2> breaks app if .common is added */}
            {/* <h2>{props.details.name}</h2> is confused bEYOND LIFE when this line applies */}
            
        </div>
    
  );
}

export default CountryDetails;