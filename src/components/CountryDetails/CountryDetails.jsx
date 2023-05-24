import { Link, useParams } from 'react-router-dom'


const CountriesDetailPage = ({ lol }) => {

    const { countriesId } = useParams()

    const selectedCountry = lol.find(elm => elm.alpha3Code === countriesId)

    return (
        <div>
            <img src={'https://flagpedia.net/data/flags/icon/72x54/' + selectedCountry.alpha2Code.toLowerCase() + '.png'} alt="hello there" />
            <h2>{selectedCountry.name.common}</h2>
            <p>Capital: {selectedCountry.capital}</p>
            <hr />
            <p>Area: {selectedCountry.area}km2</p>
            <hr />
            <p>Borders:
                {
                    selectedCountry.borders.map((elm) => {

                        const eachCountry = elm

                        const fullName = lol.find(elm => elm.alpha3Code === eachCountry)

                        return <Link to={`/${fullName.alpha3Code}`} > {fullName.name.common},</Link>

                    })
                }
            </p>
        </div>
    )
}

export default CountriesDetailPage