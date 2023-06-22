import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

function CountryDetails(props) {

    const[countryDetail, setCountryDetail] = useState(undefined)
    
    const {id} = useParams()
    const countryUrl = "https://ih-countries-api.herokuapp.com/countries/"
 

 //   console.log(id);

    useEffect(() =>{
        axios.get(`${countryUrl}${id}`)
        .then(response => {
   //         console.log(response.data);
   setCountryDetail(response.data) 

        })
        .catch(e => console.log(e))
    },[id]);

    console.log(countryDetail.name.common);
    //console.log(props);

    if(countryDetail === undefined){
        return <p>Loading...</p>
    }

    return(
        <div className="col-7">
        <h1>{countryDetail.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: 30 + "%" }}>Capital :</td>
              <td>{countryDetail.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetail.area} Km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>

                <li><a href="/CHE">Switzerland</a></li>

                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    )
}
export default CountryDetails;
