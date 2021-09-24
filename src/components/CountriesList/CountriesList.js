
import CountryItem  from './../CountryItem/CountryItem'
import './CountriesList.css' 


function CountriesLists({countries}){
  const displayCountries = () => {
      return(
          countries.map((country , idx ) => {
              return (
                  <CountryItem
                      cca3 = {country.cca3} 
                      cca2 = {country.cca2} 
                      name = {country.name.common} 
                      key = {`${country.name.common}-${idx}`}
                  />

              )
          })
      )
  } 

  return(
      <div className="col-5 scroll">
          <div className="list-group">
              {
                  displayCountries()
              }
          </div>
      </div>
  )
}




export default CountriesLists