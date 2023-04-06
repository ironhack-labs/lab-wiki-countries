import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";



export default function CountryDetails () {

    const apiURL = "https://ih-countries-api.herokuapp.com/countries"

 const { alpha3Code } = useParams();

    const [countryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        axios.get(`${apiURL}/countries/${alpha3Code}`)
            .then( response => {
                setCountryDetails(response.data)
            })
            .catch(e => {
                console.log("error getting character details from API...", e);
            })
    }, [alpha3Code]);


    
  const renderBorderList = () => {
    return countryDetails.map( (countries, index) => {

      return(
        <section key={index} className="box">
          <Link to={`/countries/${countries.alpha3Code}`}>{countries.borders}</Link>
        </section>
      ) 
    });
  }


    // const renderDetails = () => {
    //     return (
    //         <div className="box">
    //             <h1>{countryDetails.name.common} </h1>
    //             Capital: {countryDetails.capital} <br />
    //             Area: {countryDetails.area} km <br />
    //             Borders: {<Link to="/.."> </Link>} <br />
    //         </div>
    //     );
    // }


    return(
        <>
            {countryDetails
                ? renderBorderList()
                : <p>loading....</p>
            }
        </>
    )




}