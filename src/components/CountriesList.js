import {Link} from "react-router-dom"
import CountryDetails from "./CountryDetails"
import {Routes, Route} from "react-router-dom"

function CountriesList(props){
    return (
        <>
            {props.countries.map(country => {
                return (
                    <div key={country.alpha3Code}>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </div>
                )
            })}

            <Routes>
                <Route path="/:id" element={<CountryDetails />} />
            </Routes>

        </>
    )
}

export default CountriesList