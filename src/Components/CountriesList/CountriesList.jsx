import { Link } from "react-router-dom"

const CountriesList = ({ countriesData }) => {


    return (
        <>

            {
                countriesData.map(country => {
                    return (<div key={country.alpha3Code} className='countryList'>
                        <article className="eachCountry">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                alt="" className="flagIcon" />
                            <Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link>
                        </article>

                    </div>)
                })
            }
            <li></li>


        </>

    )
}

export default CountriesList