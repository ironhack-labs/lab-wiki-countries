import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function CountryDetail({countries,countryId}) {
    const country = findCountryById(countries,countryId)
    const capitals = country.capital.map((capital,idx)=>{

        return (<td key={idx}>{capital}</td>) 
    })
    const borders = country.borders.map((border,idx)=>{
        const name = findCountryById(countries,border).name.common
        return (<li key={idx}><a href={`/${border}`}>{name}</a></li>)
    })

    return (
        <div className='col-7'>
            <h1>{country.name.common}</h1>
            <table className='table'>
            <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                    {capitals}
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {borders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
}

function findCountryById(countries,countryId){
    return  countries.filter(country=>{
        return country.cca3===countryId
    })[0]
}

export default CountryDetail;
