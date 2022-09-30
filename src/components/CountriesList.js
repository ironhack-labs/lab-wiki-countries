import { Link } from "react-router-dom"

const CountriesList = (props) => {
    return (
        <div>
            {props.countries.map(element => {
                return (
                    <div>
                        <Link to='/country-details'>{element.alpha3Code}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList