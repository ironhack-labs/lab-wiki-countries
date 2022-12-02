import { useParams } from "react-router-dom";

function CountriesDetails({ countries }) {
    const { id } = useParams();
    const searchCountry = countries.find(country => country.alpha3Code === id);
    const none = "Sorry, no data..."
    const borderLength = searchCountry.borders.length;
    console.log(borderLength)
    return (<div>
        <h2>{searchCountry.name.common}</h2>
        <img
            className="img-card-top"
            src={`https://flagpedia.net/data/flags/icon/72x54/${searchCountry.alpha2Code.toLowerCase()}.png`}
            alt={searchCountry.name.common}
          />
        <p>Capital: {searchCountry.capital}</p>
        <p>Has borders with folloving countries: </p>
        <p>{borderLength === 0 ? none : searchCountry.borders.map((element, i) => {
            //console.log(element)
            const c = countries.find(country => country.alpha3Code === element);
            return ( 
                borderLength === 1
                ? <span key={c.alpha3Code}>{c.name.common}</span>
                : i === borderLength - 1 
                ? <span key={c.alpha3Code}> and {c.name.common}. </span> 
                : <span key={c.alpha3Code}>{c.name.common}, </span>
            )
        })}
        </p>
    </div>
    )
}

export default CountriesDetails;