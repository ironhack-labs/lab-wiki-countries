import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const axios = require('axios');

export default function CountryDetails(props) {
  const countryId = (useParams().countryId);
  const [country, setCountry] = useState();
  console.log("DETAILS",country)

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((countryFromApi) => {
        if (country)
       {if (country.name.common !== countryFromApi.data.name.common) {
        console.log("Changing country to ",countryFromApi.data.name.common)
 
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
                          console.log({border})
                                  

                            return <li><Link to={`/details/${border?.alpha3Code}`}>{border?.name.common}</Link></li>
                          }  })
                    }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
</div>



            
            /* <div className='card'>
                <div className='card-body' style={{width:700}}>
                        <h3 className="card-title">{country.name.common}</h3>                
                        <img style={{width:200}} src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt="BigCo Inc. logo"/>                                
                        <div>Capital: {country.capital}</div>
                        <div>Area: {country.area} km2</div>
                        <div>Borders:</div>
                        
                        {country.borders.map((borderItem) => {
                          if (props.countries){
                          let border = props.countries.find(function(post, index) {
	                                if(post.alpha3Code === borderItem)
		                              return true;
                                  });
                          console.log({border})
                                  

                            return <div><Link to={`/details/${border?.alpha3Code}`}>{border?.name.common}</Link><br/></div>
                          }  })
                        }
                </div>                           
            </div>  */




            : 
            <>LOADING</>}
          
                {/* <Link to={`/details/${country.alpha3Code}`}>Click here</Link> */}
            </div>
          
        );
   
}
