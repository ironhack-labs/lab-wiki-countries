
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountriesDetails(){
const {id} = useParams();
const [country, setCountry] = useState();


useEffect(() => {
    getCountry(id).then((res) => {
      console.log(res.data);
      setCountry(res.data);
    });
  }, [id]);


  const country = countries.find(country => country.alpha3Code ===alpha3Code ) || {};

  if (!country return <div>Loading...</div>;


  return (
    <div className=''>
      
      <table className='table'>
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '40%' }}>Capital</td>
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
                {country.borders &&
                  country.borders.map(elem) {
                    return (
                      <li key={elem}>
                        <Link to={countries.find(country => country})
                      </li>
                    );
                  })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


  export default CountryDetails;