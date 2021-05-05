import './CountriesList.css'
import countries from './countries.json'
import Country from './Country'

const CountriesList = props => {

    return(

        <section>
            {
                countries.map((elm, idx) => <Country key={idx} name={elm.name.common} flag={elm.flag} cca3={elm.cca3}></Country>)
            }
        </section>
    )
}

export default CountriesList