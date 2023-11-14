import { Link } from "react-router-dom"

function CountriesList(props) {
return (
    <>
    <h1>list of links</h1>
    
    {props.countriesArray.map(function(elm) {
       return (
       <>
       <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}/>
       <Link to={`${elm.alpha3Code}`} key={elm.alpha3Code}>Country:{elm.name.common}</Link>
       <br />
       </>
    )
    
    })}
    
    </>
)
}

export default CountriesList