import Countries from "../countries.json"
import { Link } from 'react-router-dom'


function CountriesList() {
    return (
        <>
            <h2>Countries:</h2>
            {Countries.map((el) => {
                return (<div key={el.alpha2Code}><p><img src={`https://flagpedia.net/data/flags/w702/${el.alpha2Code.toLowerCase()}.webp`} alt="flag" /></p><p><Link key={el.alpha3Code} to={`/${el.alpha2Code}`}>{el.name.common}</Link ></p>
                </div>)
            })}
        </>
    )
    //https://flagpedia.net/data/flags/w702/${el.alpha3Code}.webp  img de la bandera
    //
}

export default CountriesList;