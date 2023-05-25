import { Link } from "react-router-dom"


const CountriesList = ({ countries }) => {

    // const [countriesArr, setcountriesArr] = useState(countries)

    return (
        <div>
            <h2>Countries</h2>
            {countries.map((countries, index) => {
                return (
                    <div className="row" key={index}>
                        <div className="list-countries">
                            <h3>{countries.name.common}</h3>
                            <Link to={countries.alpha3Code}><img src={`https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`} alt="banderas" /></Link>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default CountriesList

