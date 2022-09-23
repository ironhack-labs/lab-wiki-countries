import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function CountryDetails(props) {
  const {id} = useParams();


  const [country, setCountry] = useState({})

  useEffect(() => {
    async function getCountry() {
      try {
        const countryNeeded = await axios.get('https://ih-countries-api.herokuapp.com/countries/' + id)
        const countryNeededData = countryNeeded.data;
        setCountry(countryNeededData)
      } catch (error) {
        console.log(error)
      }
    }
    getCountry();
  }, [id])
  console.log(country)
  if (!Object.keys(country).length) {
    return <span>loading</span>
  }
  
  return (
    <div className="country-details">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
      <h3>{country.name.official}</h3>
      <h4>Capital city: {country.capital[0]}</h4>
      <h4>Area: {country.area} km2</h4>
      {country.borders.map(border => {
        return <Link className='links' to={'/' + border}><span>{border}</span></Link>
      })}

    </div>
  )
}