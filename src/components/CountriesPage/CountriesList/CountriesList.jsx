import { Link } from "react-router-dom"
import CountryLi from "../CountryLi/CountryLi"

const CountriesList = ({ countries }) => {
    return (
        <>
            {
                countries?.map(elm => {

                    return <CountryLi key={elm.alpha3Code} {...elm} />
                })
            }
        </>
    )
}

export default CountriesList