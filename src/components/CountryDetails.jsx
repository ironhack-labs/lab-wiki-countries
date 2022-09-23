import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";




function CountryDetails(props) {
    const [country, setCountry] = useState({});

    const { countryCode } = useParams();
    const [featching, setFeatching] = useState(true)
    // const [countries, setCountries] = useState([])

    useEffect(()=> {
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`).then(res => {
        const choosenCountry = res.data   // .find(country => country.alpha3Code === countryCode)
        console.log(choosenCountry)
        setCountry(choosenCountry)
        setFeatching(false)

      }).catch(err => console.log(err));
    }, [countryCode])

   

    const borderingCountries =  country.borders 

   if(!country?.name && !country?.name?.common){
        return <p>Loading...</p>
     }

    return (      
        <div className="col-7" >
        <div style={{ padding: '20px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
           {featching && <p>Loading..</p>} 
            <h1>{country.name.common}</h1> 
            <div style={{padding: '40px'}}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png` }  alt= 'sth'  />
            </div>            
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td style={{fontSize: '1.2em' }}>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul style= {{  listStyleType: 'none', margin: 0,  padding: 0 }}>
                    {borderingCountries.map((bordering)=> {
                        return(
                            <li key={bordering} > <Link to={`/${bordering}`}  style={{margin: '5px', width: '100px'}} className="btn btn-outline-secondary">{bordering}</Link></li>
                        )
                    })}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


    )
  
}

export default CountryDetails

