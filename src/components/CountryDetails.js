import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react";

const CountryDetails= ({countries}) => {

    const { id } = useParams();

    const [foundCountry, setFoundCountry] = useState(null);

    const width = {
        width: "30%"
    }

    useEffect(() => {
        const country = countries.find((oneCountry) => {
          return oneCountry.alpha3Code === id;
        });
    
        if (country) {
          setFoundCountry(country);
        }
      }, [id]);

      console.log(foundCountry)

    return (
        <>
   
  
            {!foundCountry && <h3>Country not found!</h3>}
            
            {foundCountry && (
            <div className="col-7">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} width="100px" />
                <h1>{foundCountry.name.common}</h1>
             <table className="table">
                <thead></thead>
                <tbody>
            <tr>
              <td style={width}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
              <ul>
                {foundCountry.borders.map(country => {
                    return <li><Link to={`/${country}`}>{country}</Link></li>
                })}
                 </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        )}
  
        </>
            
        
  
    );
}

export default CountryDetails;