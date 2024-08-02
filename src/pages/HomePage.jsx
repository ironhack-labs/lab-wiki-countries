import { Link } from "react-router-dom"

function HomePage({countries}) {

    return (
        <div className="container homepage-container">
            <h1>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {countries.map((oneCountry) => {
                    return (
                        <Link key={oneCountry.alpha3Code} to={`/${oneCountry.alpha3Code}`}>
                            <div className="list-group-item list-group-item-action">
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`} alt={oneCountry.name.common} />
                                <h5>{oneCountry.name.common}</h5>
                            </div>
                        </Link>
                    
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;
