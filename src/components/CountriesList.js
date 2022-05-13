// import countries from '../countries.json'
import '../index.css'

const CountryList = ((props) => {
    return props.countries.map((country) => {
        return (
            <div className="col-12" key={country.alpha2Code}>
                <div className="list-group">
                    <a className="list-group-item list-group-item-action" href={`${country.alpha3Code}`}>
                        <img alt="" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        {country.name.official}
                    </a>
                </div>
            </div>
        )
    })
})

export default CountryList