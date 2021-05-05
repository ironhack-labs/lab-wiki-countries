import './CountriesList.css'
import CountryRow from './CountryRow'
import countriesJson from './../countries.json'

const CountriesList = props => {

        return(
            <section className="countries">
                {countriesJson.map((elm, idx) => <CountryRow key={idx} image={elm.flag} name={elm.name.official} id={elm.cca3}/>)}
            </section>
        )

}

export default CountriesList