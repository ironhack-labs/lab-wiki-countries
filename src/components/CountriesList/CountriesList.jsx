import { Link } from "react-router-dom";


function CountriesList({ countries }) {

    const countriesCopy = [...countries]

    return (
        <>
            {
                countriesCopy.map(({ alpha3Code, alpha2Code, name }) => {
                    return (
                        <div key={alpha3Code}>

                            <Link to={`/countries/${alpha3Code}`}>
                                <div>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="flag" />
                                    <p>{name.official}</p>
                                    
                                </div>
                            </Link>
                        </div>
                    )
                })

            }
        </>

    );
}

export default CountriesList