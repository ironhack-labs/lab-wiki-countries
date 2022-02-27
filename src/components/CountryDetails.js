import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "./CountryDetails.css"

export default function CountryDetails(props) {
   
    const [countryDetails, setcountryDetails] = useState(null)
    const { Id } = useParams();
    const {countries} = props
    // console.log(Id);

    useEffect(() => {
        axios
          .get(`https://ih-countries-api.herokuapp.com/countries/${Id}`)
          .then((result) => {
            console.log(result.data)
            setcountryDetails(result.data);
          })
          .catch();
      }, [Id]);

      if(!countryDetails){
          return <h1>Loading...</h1>
        }
      
       
  return (
    <div className='stickyDetails'>
        
        
        <img className='flag' src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="flag of country"></img>
        <br />
       <h1> {countryDetails.name.common}</h1>
       <hr />
       <h3> Capital: {countryDetails.capital}</h3>
       <hr />
       <h3> Area: {countryDetails.area} km2</h3>
       <hr />
       <h3> Borders: </h3>
       { countries.map((element, index) => {
            return (
              <div  key={element._id}>
                <Link to={""}>
                {element.name.common}</Link>
              </div>
            );
          })}
        



        {/* <Routes >
        <Route path="/:Id" element={<CountryDetails countries={countryDetails}/>} />
       </Routes> */}
       
       



    </div>
  )
}
