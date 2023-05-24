import './CountriesList.css'
import countries from './../../countries.json'
import { Link } from 'react-router-dom'

const CountriesList = () => {

    return (

        < div className="container" >
            <div className="row">

                <div className="cointries-list" style={{ marginRight: 'spacing' }}>

                    <div className="list-group">

                        {countries.map((country) => {
                            return (
                                <>
                                    <div key={country.alpha3Code} className='countryButton'>
                                        <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action"> <img className='countryFlag' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />{country.name.common}</Link>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div >


    )
}

export default CountriesList