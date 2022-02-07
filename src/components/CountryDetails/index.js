import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetchCountry } from '../../hooks/useFetchCountries';


const CountryDetails =  (props) => {
  const {id} = useParams();
  console.log("params", id)

  const {data: country, loading} = useFetchCountry(id)

  console.log(country, loading)

  if(loading){
    return (<p>loading ......</p>)
  }else{
    return (
      <div className="col-7">
        <h1>{country.name.common || ''}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className='w-capital'>Capital</td>
              <td>{country.capital[0]}</td>
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
                {
                  country.borders.map((border, idx) =>(<li key={idx}><a href={`/${border}`}>{border}</a></li> ))

                }
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


};


export default CountryDetails;
