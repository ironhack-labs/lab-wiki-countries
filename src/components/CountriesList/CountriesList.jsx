import './CountriesList.css'
import { Link } from "react-router-dom";

function CountriesList({ countries }) {

    return (
        <div className='countryList'>
            <h1>Countries List</h1>

            <hr />

            {
                countries.map((elm, idx) => {
                    const link = `/${elm.alpha3Code}`
                    const source = `https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`
                    return (
                        <div className='countryLink' key={idx}>
                            <Link to={link} >{elm.name.common} <img src={source} alt={elm.name.common} /></Link>

                        </div>
                    )
                })
            }
            <hr />
        </div >
    );
}

export default CountriesList;