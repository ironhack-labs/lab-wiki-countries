import countriesList from './../../countries.json'
import './CountriesList.css'

export default function CountriesList() {

    const displayCountries = () => {

        return (

            countriesList.map((country, idx) => {
                return (

                    <div key={idx} className="list-group">
                        <a className="list-group-item list-group-item-action" href={`/${country.cca3}`}>{country.flag} - {country.name.common}</a>
                    </div>
                )
            })
        )
    }

    return (

        displayCountries()

    )
}
