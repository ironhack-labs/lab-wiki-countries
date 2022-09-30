import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

function CountryDetails(props){

    const {countryCode} = useParams();
    
    const [singleCountry, setSingleCountry] = useState(null)

    useEffect(()=>{
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            .then(res => res.json())
            .then(json => setSingleCountry(json))
            .catch(err => console.log(err))
    },[countryCode])


    return(
        <div>
            {singleCountry ? ( 
                <div id='country-details'>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${singleCountry.alpha2Code.toLowerCase()}.png`} alt={singleCountry.name.common}/>
                    <h3>{singleCountry.name.common}</h3>
                    <p>Capital: {singleCountry.capital[0]}</p>
                    <p>Area: {singleCountry.area} sqkm</p>
                    <p>Borders:</p>
                    <ul>
                    {singleCountry.borders.map(country => {
                        return <li>{country}</li>
                    })}
                    </ul>
                </div>
            ) : <div>Loading...</div>}
          
        </div>
    )
}

export default CountryDetails;