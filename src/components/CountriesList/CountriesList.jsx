import "./Countries-list.css"
import { Link } from "react-router-dom"

const CountriesList = ({ contriesData }) => {

    return (
        < div className="country-list">
            {
                contriesData.map((eachCountry) => {
                    return (
                        <button key={eachCountry.alpha3Code}>
                            <div  >
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt={eachCountry.name.official} />
                                <Link to={`/${eachCountry.alpha3Code}`} > <p>{eachCountry.name.official}</p>  </Link>
                            </div>
                        </button>
                    )
                })
            }
        </div >

    )

}
export default CountriesList