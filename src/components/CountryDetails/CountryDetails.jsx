import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


const CountryDetails = ({ countries }) => {

    const { id } = useParams()
    // console.log(countries)

    const clickedCountry = countries.find(elm => elm.alpha3Code === id)
    const code = `https://flagpedia.net/data/flags/icon/72x54/${clickedCountry.alpha2Code.toLowerCase()}.png`

    return (
        <div className="card" key={clickedCountry.alpha2Code}>
            <img src={code} className='detailIMG' alt="" />
            <h1>{clickedCountry.name.common}</h1>
            <p>Capital : {clickedCountry.capital}</p>
            <hr />
            <p>Area : {clickedCountry.area}</p>
            <hr />
            Borders : {
                clickedCountry.borders.map(elm => <Link key={elm} to={`/${elm}`}><p>{elm}</p> </Link>)
            }
            <hr />
        </div>



    )

}
export default CountryDetails