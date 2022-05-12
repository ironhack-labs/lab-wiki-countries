import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';

function CountryDetails (props) {

  const [details, setDetails] = useState({});

  const {countryId} = useParams();

/*   Not sure why my page doesn't show anything at all on the browser. I have tried to apply the logic anyway to display the borders, but I have a feeling that my code is all over the place, sorry! */

  useEffect(() => {
      /* I should maybe have this in there somewhere? : country.alpha3Code === countryId; 
    }); */
    /* and something like this? : setDetails(prevValue) */
  }, [countryId])

    return (
        <div class="col-7">
        <h1>CountryDetails</h1>
            <h1>{details.name}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{details.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
          
                  <td>Borders</td>
                  {details.borders.map((code) => {
                    return (
                            <td>
                          <ul>
                          <li> 
                          <NavLink to={code.alpha3Code}> {code.name.common}</NavLink>
                          </li>
                          </ul>
                        </td>
                    )
                  
                  })}   
                </tr>
             </tbody>
            </table>
          </div>

    )
}

export default CountryDetails;