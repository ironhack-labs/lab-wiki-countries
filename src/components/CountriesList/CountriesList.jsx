import { Link } from "react-router-dom"

const CountriesList = ({ countries }) => {

    return (
        <>
            <h2>Countries List</h2>

            {
                countries.map(elm => {
                    return (
                        < div key={elm.alpha3Code} className="country" >
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt={`${elm.name.official}`} />
                            <h3>{elm.name.official}</h3>
                            <Link to={elm.alpha3Code}>
                                <p>{elm.alpha3Code}</p>
                            </Link >
                        </div>
                    )
                })
            }
        </>
    )
}


export default CountriesList