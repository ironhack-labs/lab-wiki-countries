import { NavLink } from "react-router-dom"

function CountriesList(props) {
    const renderCountry = () => {
        const result = props.countries.map(element => {
            return (
            <div>
                <NavLink to={`/${element.alpha3Code}`}>{element.name.official}</NavLink>
            </div>
            )   
        })
        return result
    }
    
    return (
        <div>
            {renderCountry()}
        </div>
    )
}

export default CountriesList