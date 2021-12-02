import Countries from '../countries.json'
import { Link } from 'react-router-dom'
import CountriesCard from './CountriesCard'


class CountriesList extends Component {
    constructor() {
        super()
        this.state = Countries
    }

    render() {
        return this.state.countries.map((eachCountries) => (
            <CountriesCard
                key={eachCountries.name}
                flag={eachCountries.flag}
                name={eachCountries.name}
            />

        ))
    }

}

export default CountriesList