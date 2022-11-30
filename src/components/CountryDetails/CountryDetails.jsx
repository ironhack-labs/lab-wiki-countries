import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import countriesArray from "../../countries.json"

const CountriesList = () => {

  const [countries, setCountriesDetails] = useState([])

  // const [countries, setCountriesDetails] = useState()

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries`)
      .then(res => res.json())
      .then(countriesData => setCountriesDetails(countriesData))
  }, [])

  const { country_id } = useParams()

  const foundcountry = countries?.find(country => country.alpha3Code === country_id)




  return (
    <div>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundcountry?.alpha2Code.toLowerCase()}.png`} alt="" />
      <h1>Detalles de pais {foundcountry?.name.common}</h1>
      <p>Capital: {foundcountry?.capital} </p>
      <p>Area: {foundcountry?.area} km²</p>
      <p>Borders:
        <ul>
          {foundcountry?.borders.map((elm, index) => {
            return (
              <li>
                <Link key={index} to={`/${elm}`}>{elm}</Link>
                <br></br>

              </li>

            )
          })}
        </ul>


      </p>

      <hr />
      <Link to="/">Volver a Inicio</Link>
    </div>

  )



}

export default CountriesList