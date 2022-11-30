// import countriesInfo from "../../countries.json"
import {useState} from "react"
import { Link } from "react-router-dom";

const CountriesList = (props) => {
  const countriesInfo = props.countries

    const [countries, setCountries] = useState(countriesInfo)

    return (
        <section>
            {
            countries.map((elm) => {
                return(
                    <div className="col-5 countries-column">
                    <div key={elm.alpha3Code}>
                    <p> <Link to ={elm.alpha3Code}>{elm.name.official} </Link> </p>
                    </div>
                    </div> 
                )
    })
}
</section>
)}


export default CountriesList