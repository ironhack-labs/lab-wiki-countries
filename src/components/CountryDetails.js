import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

function CountryDetails(props) {

    const {id} = useParams()
    const[countryDetails, setCountryDetails] = useState(null)
    
    const countryUrl = "https://ih-countries-api.herokuapp.com/countries"
 

 //   console.log(id);

    useEffect(() =>{
        axios.get(`${countryUrl}/${id}`)
        .then(response => {
   //         console.log(response.data);
            setCountryDetails(response.data) 

        })
        .catch( e => console.log(e))

    },[id]);

    console.log(countryDetails.name.common);
    


    return(
        <div className="col-7">
        <h1>{countryDetails.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: 30 + "%" }}>Capital :</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area} Km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    )
}
export default CountryDetails;
