import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails(props){
    const [country, setCountry] = useState(null)
    

    const {id} = useParams();

    useEffect( () => {
        setCountry(null);
        axios
            .get("https://ih-countries-api.herokuapp.com/countries/" + id)
            .then((result)=>{
             
                setCountry(result.data)
            })
            .catch( err => console.log("error getting country from API", err))
    },[id])
        
    const countries = props.countries;
   

        
        return(
            <div className="col-6">
            {country ? <img src={"https://flagpedia.net/data/flags/icon/216x162/" + country.alpha2Code.toLowerCase() + ".png"} alt="flag" /> : <div className="circle-spin-1"></div>}
                {country ? <h1>{country.name.official}</h1> : <div className="circle-spin-1"></div>}
                
                
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{country ? country.capital.map( (capital) => <p>{capital}</p>) : <div className="circle-spin-1"></div>}  </td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country ? country.area : <div className="circle-spin-1"></div> } km
                                <sup>2</sup>
                            </td>
                        </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country ? country.borders.length > 0 ? country.borders.map((neighbour, index) => {
                        return <li key={index}><Link to={"/"+ neighbour}>{countries.filter( ele => ele.alpha3Code === neighbour)[0].name.official}</Link></li>
                    }): <p>no borders</p> : <div className="circle-spin-1"></div>} 

                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
}

export default CountryDetails