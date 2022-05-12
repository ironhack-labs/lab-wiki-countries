
import { NavLink } from "react-router-dom";


const CountriesList = ({ countries }) => {
  return (
    <>
      <br/>
      {countries.map(country => {
        return (
          <div class="container CountriesList">
          <div class="row ">
            <div class="col-3">
              <div class="card" >
                <div class="card-body" key={country._id}>
                  <img class="card-img-top" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                  <NavLink to={`/${country.alpha3Code}`}>{country.name.common}</NavLink>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
      })}
    </>
  )
}

export default CountriesList;
