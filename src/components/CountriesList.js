import {Link} from "react-router-dom";


function CountriesList ({countries}) {

    //const [countries, setCountries] = useState([]);

    return (
        <div>
            <h3>Countries List</h3>
            {countries.map((country) => {

                const flagImageUrl = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

                return (
                    <div key={country.alpha3Code} className="countries" style={{display:'flex', flexDirection:"row", flexWrap:"wrap"}}>
                        <h5>
                        <img src={flagImageUrl} alt={`${country.name.common} Flag`} style={{width:'20px'}}/>
                        <Link to={`/countries/${country.alpha3Code}`}>
                            {country.name.common}
                        </Link>
                        </h5>
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesList;