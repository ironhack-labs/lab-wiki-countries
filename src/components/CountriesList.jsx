import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CountriesList = ({ countries }) => {
    const [countriesRender, setCountriesRender] = useState([])

    useEffect(() => {
        setCountriesRender(countries)
    }, [countries])
    return (
        <div className='countriesList-container'>
            {
                countriesRender.map((elm) => {
                    return (<div key={elm.alpha3Code} className='flex gap-5 p-5 border-basic'>
                        <Link to={`/${elm.alpha3Code}`} ><span>{elm.alpha3Code}</span></Link>
                        <span>{elm.name.official}</span>
                        <span><img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" /></span>
                    </div>)
                })
            }
        </div>
    )
}

export default CountriesList