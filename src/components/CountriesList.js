import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import {Routes, Route} from 'react-router-dom'
import CountryDetails from '../components/CountryDetails'


function CountriesList(props){
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(props.countries)
  }, [props.countries])

  return(
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="list-group">
            {countries.map(country => {
              return(
                <Link key={country.alpha3Code} to={`/details/${country.alpha3Code}`} className="list-group-item list-group-item-action"> <img height={40} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/> <br /> {country.name.common}</Link>
              )
            })}
          </div>  
        </div>
        <Routes>
          <Route path="/details/:id" element={<CountryDetails countriesArr={props.countries}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default CountriesList