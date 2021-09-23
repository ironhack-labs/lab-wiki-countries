    //Import router-dom
    import { Link } from 'react-router-dom';
    
    const CountriesList = ({ countryData }) => {
        return (

            <div className="list">
                <ul>
                    {countryData.map((country) => {
                        return (
                            <Link
                                to={'/' + country.alpha3Code}
                                className="list-group-item list-group-item-action countryListA"
                                key={country.alpha3Code}
                            >
                                <img
                                    src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`}
                                    className="countriesListImage"
                                    alt={`${country.name}`}
                                />
                                <p className="pNoMargin">{country.name}</p>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        );
    };
    
    export default CountriesList;