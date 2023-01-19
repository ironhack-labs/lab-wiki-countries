import { NavLink, useParams } from "react-router-dom";

export default function CountryDetails({countriesList}){
    
    const {alpha3code} = useParams();

    const selectedCountry = countriesList.find((choosenCountry) => {
        return choosenCountry.alpha3Code === alpha3code;
    })
   

    return (
      <div className="col-6">
        <div className="card">

            <h2>{selectedCountry.name.common}</h2>
            <p><b>Capital:</b> {selectedCountry.capital}</p> <hr />
            <p><b>Area:</b> {selectedCountry.area}</p> <hr />
            <p><b>Borders:</b>
              {selectedCountry.borders.map((borderWith) => {
                return (
                    <p key={selectedCountry.alpha3Code}>
                       <NavLink to={`/countries/${borderWith}`} >{borderWith}</NavLink>
                    </p>
                )
              })}
            </p>

        </div>
      </div>
    );
}