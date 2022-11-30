import { Link } from "react-router-dom";

function CountriesPage({ countries }) {
    console.log('MUESTRACOUNTRY')

    console.log(countries)


    return (
        <div>
            <h2>Countries</h2>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code} className="country">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="FLAG" />
                        <h3>{country.name.official}</h3>
                        <Link to={`/countries-details/${country.alpha3Code}`}>Details</Link>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesPage; 