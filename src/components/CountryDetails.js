import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';







function CountryDetails(props) {

    const { countryCode } = useParams();

    console.log(countryCode)

    const [countryDetailsObject, setCountryDetailsObject] = useState(null);


    console.log(countryDetailsObject)
    useEffect(() => {

        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
          .then(res => res.json())
          .then(json => setCountryDetailsObject(json))

          
      }, [countryCode])

    return(
        <div>
      { countryDetailsObject ? (
        <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetailsObject.alpha2Code.toLowerCase()}.png`} alt={countryDetailsObject.title} height={100}/>
          <h2>{countryDetailsObject.name.common}</h2>
          <p>Capital: {countryDetailsObject.name.official}</p>
          <p>Area: {countryDetailsObject.area}</p>
          <p>Borders:</p>
          {countryDetailsObject.borders.map(singleCountry => {
        return (
          <div key={singleCountry}>
          <p>{singleCountry}</p>
          </div>
        );
      })}
        </div>
      ) : (
        <p>loading...</p>
      ) }
    </div>
    )

}



export default CountryDetails