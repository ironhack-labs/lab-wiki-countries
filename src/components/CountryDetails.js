import { useEffect, useState } from "react";
import {Routes, Route, Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios"

function CountryDetails({countries}){
    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries" + id)
          .then( response => {
            setDetails(response.data);
          })
          .catch(e => console.log("error getting characters from API", e));
      }, []);
    
    return(
        <div className="col-7">
            <h1>{details.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{details.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {details.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {/* <ul>{countries.borders.map((border) => {
                        <li><Link to={`/${border}`}>Andorra</Link></li>
                    })}
                    </ul> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails