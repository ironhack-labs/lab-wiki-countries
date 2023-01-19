import { Link } from "react-router-dom";
import "./CountriesList.css"
export default function CountriesList(props){
    const {countriesArr}= props
   
    return (
      <div className="countries-list">
        {!countriesArr
          ? 'Loading...'
          : countriesArr.map((country) => {
              return (

                <div key={country.alpha3Code} className="country-in-list">
                  <Link
                    className="country-link"
                    
                    to={'/' + country.alpha3Code}
                  >
                    <div className="flag-container">
                      <img
                        src={`https://flagpedia.net/data/flags/icon/36x27/${country.alpha2Code.toLowerCase()}.png`}
                        alt="flag"
                      />
                    </div>
                    <h5>{country.name.common}</h5>
                  </Link>
                </div>
              );
            })}
      </div>
    );
}