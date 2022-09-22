import {useParams} from 'react-router-dom'

export default function CountryDetails(props) {
  const {id} = useParams();
  const {countries} = props


  const neededCountry = countries.find(element => element.alpha3Code === id)

  console.log(neededCountry)
  return (
    <div className="country-details">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${neededCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />
      <h3>{neededCountry.name.official}</h3>
      <h3>{neededCountry.alpha2code}</h3>
    </div>
  )
}