import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const axios = require('axios');

export default function CountryDetails(props) {
  const countryId = (useParams().countryId);
  const [country, setCountry] = useState();
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((countryFromApi) => {
        if (country)
       {if (country.name.common !== countryFromApi.data.name.common) { 
        setCountry(countryFromApi.data);}} else {setCountry(countryFromApi.data);}
      
      });
  });
        return (
            <div>  
            { country ? 
              <div className="col-7">
              <img style={{width:200}} src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt="BigCo Inc. logo"/>                                
              <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((borderItem) => {
                          if (props.countries){
                          let border = props.countries.find(function(post, index) {
	                                if(post.alpha3Code === borderItem)
		                              return true;
                                  });                                  
                            return <li><Link to={`/details/${border?.alpha3Code}`}>{border?.name.common}</Link></li>
                          } 
                    })
                    }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
</div>
            : 
            <>LOADING</>}
            </div>
        );
   
}
