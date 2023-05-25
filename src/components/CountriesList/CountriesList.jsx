import { Link } from "react-router-dom";
import './CountriesList.css'

const CountriesList = ({ countries }) => {
    // const [countries, setCountries] = useState(countries)
    // console.log(elm)
    return (

        <>
            {
                countries.map((eachCountry, idx) => {

                    const code = `https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`
                    return (
                        <Link key={idx} to={`/${eachCountry.alpha3Code}`}>
                            <div className="card">
                                <img src={code} className='listIMG' alt="" />
                                {eachCountry.alpha3Code}
                            </div>
                        </Link>
                    )
                })

            }
        </>

    )
}

export default CountriesList