import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { _Id } = useParams()
    let findCountry = countries.find((elm) => (elm.alpha3Code === _Id));
    // console.log(findCountry.name.official)
    return (<div>
        <div><h1>{findCountry.name.official}</h1></div>
        <hr />
        <Link to="/">Volver a inicio</Link>
    </div>
    )
}

export default CountryDetails