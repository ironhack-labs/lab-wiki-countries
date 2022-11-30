import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import countriesArray from "../../countries.json"

const CountriesList = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries`)
      .then(res => res.json())
      .then(countriesData => setCountries(countriesData))
  }, [])


  return (
    <section>
      <h2>Listado de paises</h2>


      {countries.map(elm => {
        return (
          <div >
            <Link to={elm.alpha3Code}>{elm.name.common}</Link>
          </div>
        )


      })}



    </section>
  )


}

export default CountriesList