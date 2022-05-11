

import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'


const CountryDetails = (props) => {
  const [foundCountry, setFoundCountry] = useState(null)
const {countriesArray} = props;
  const { countryId } = useParams();

  useEffect(() => {
    const country = countriesArray.find((countryObj) => {
      return countryObj.alpha3Code === countryId;
    });
    if (country) {
      setFoundCountry(country);
    }
  }, [countryId]);

  return (
    <>
 
     {foundCountry && (
     <>
    
       <img style={{marginLeft: '1rem'}} src={`https://flagcdn.com/w320/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="country" style={{ border: '1px solid black'}}/>
     <h1>{foundCountry.name.common}</h1>
      <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  {foundCountry.capital[0]}
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {!Boolean(foundCountry.borders.length) && <span>No shared borders!</span>}
                      {foundCountry.borders.map(countryBorder=>{
                      return (
                        <li key={countryBorder}>{countryBorder}<Link to={countryBorder}></Link></li>
                      
                            
                        );
                      })}
                   
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </>
     )
     }

     

   
    </>
  );
};

export default CountryDetails;
