import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function CountryDetails() {

    const baseURL = " https://ih-countries-api.herokuapp.com/";
    const { countryId } = useParams();
    const [countryDetails, setCountryDetails] = useState();

    // useEffect(() => {
    //     console.log(countryId);
    //     axios.get(baseURL + "countries/" + countryId)
    //         .then(response => {
    //             setCountryDetails(response);
    //             console.log("THIS IS WHAT THE API IS FETCHING ", countryDetails)
    //         })
    //         .catch(e => console.log("error", e))
    // }, [])


    useEffect(() => {
        const fetchData = async () => {
            let result = await axios.get(baseURL + "countries/" + countryId);
            setCountryDetails(result.data);
        }
        fetchData();
    }, [countryId])


    return (
        <>
            <h1>Country details</h1>
            {console.log(countryDetails)}


            {countryDetails
                ? <><h1>{countryDetails.name.common}</h1>
                    <p>{countryDetails.capital}</p>
                    <p>{countryDetails.area} km</p>
                    <img src={"https://flagpedia.net/data/flags/icon/72x54/"+countryDetails.alpha2Code.toLowerCase()+".png"} alt="" />
                    <br />

                    {countryDetails.borders.map((element) =>{
                        return(<>
                        <li> <Link to ={"/"+element}>{element}</Link></li>
                       
                        </>
                        )
                })}
                    
                    </>

                : <h1>Loading....</h1>
            }


        </>

    )
}

export default CountryDetails;
