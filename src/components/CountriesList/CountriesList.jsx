import { Link } from "react-router-dom"

const CountryList = ({ Countries }) => {



    return (
        <div class="container">
            {Countries.map((country) => {
                return (
                    <div className="row">
                        <div className="list-group">
                            <div className="col">
                                <div>
                                    <h3>{country.name.official}</h3>
                                </div>
                                <Link to={country.alpha3Code}>
                                    <div>
                                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                                    </div>{country.alpha3Code}</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountryList