import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetails = (props) => {

    const baseURL = "https://ih-countries-api.herokuapp.com";

    const [details, setDetails] = useState(props);

    const {alpha3CodeURL} = useParams();

    console.log(details)
   

    useEffect( () => {
        axios.get(baseURL + '/countries/' + alpha3CodeURL)
            .then((response) => {
                // const APIresponse = 
                setDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="box">
            {/* <h1>{details.name.common} </h1> */}
            Alpha 3 Code: {details.alpha3Code} <br />
        </div>
    );
  }
  
  export default CountryDetails;