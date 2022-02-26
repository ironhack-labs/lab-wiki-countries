import { Link } from "react-router-dom"

function CountriesList(props) {
    return (
        <div className="countries-list">
            {/* sort array a-z */}
            {props.countriesProp.sort((country1, country2) => {
                if (country1.name.common < country2.name.common) {
                    return -1;
                }
                if (country1.name.common > country2.name.common) {
                    return 1;
                }
                return 0;
            }).map((country) => {
                return (
                    <li key={country.alpha3Code} style={{ color: "white", border: "solid 1px grey" }}>
                        <img
                            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={country.name.common}
                            style={{ width: '50px', margin: "15px" }}
                        />
                        <Link to={`/countries/${country.alpha3Code}`} style={{ textDecoration: 'none' }} >
                            <h2 style={{ paddingLeft: 13, marginBottom: "40px", color: "black" }}>
                                {country.name.common}
                            </h2>
                        </Link>
                    </li>
                )
            })}
        </div>
    )
}

export default CountriesList

// key={country.alpha2Code}
