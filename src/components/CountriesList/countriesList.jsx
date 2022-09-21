import data from '../../countries.json'
import { Link } from "react-router-dom"
import './countriesLiest.css'

function CountriesList() {
    return (
                <div className="row">
                    {
                        data.map(el => {
                            return (
                                <div className="col-2 m-2 justify-content-center mx-4">
                                    <div>
                                        <img className="bandera" src={`https://flagpedia.net/data/flags/w702/${el.alpha2Code.toLowerCase()}.webp`}/>
                                    </div>
                                    <Link key={el.alpha3Code} to={`/${el.alpha3Code}`}>{el.name.common}</Link>
                                </div>
                            )
                        }
                    )}
                </div>
    )
}

export default CountriesList;