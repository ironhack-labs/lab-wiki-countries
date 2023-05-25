import { Link } from "react-router-dom";


function CountriesList({ countries}) {
  return (
    <div>

        <h3>Lista de países</h3>

        <div>

         {countries.map((eachCountry) => {
          return(
            <div>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="foto-pais"></img>
              <br/>
              <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
            </div>
          )
          
          
          })}

        </div>

    </div>
  )
}

export default CountriesList;