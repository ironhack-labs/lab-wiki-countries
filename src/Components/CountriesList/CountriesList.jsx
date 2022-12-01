import { NavLink } from "react-router-dom";

const CountriesList = ({ countries }) => {

    return (
        <>
            {
                countries.map((country) => {
                    return (
                        <div key={country.alpha3Code} className="col-5 list-column">
                            <div className="list-group">
                                <NavLink to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                                    {country.alpha2Code} {country.name.common}
                                </NavLink>
                            </div>
                        </div>
                    )
                }
                )
            }
        </>
    )
}
export default CountriesList
