import { Link } from 'react-router-dom';


const CountriesList = ({ countries }) => {
    console.log(countries)
    return (
        <div className="col-5 text-start" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
                {
                    countries.map((country) => {
                        const minCode = "https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"
                        console.log("CÓDIGO MINUSCULAS   ", minCode)
                        return (
                            <div className="p-3" key={country.alpha3Code}>
                                <img className="px-3" src={minCode} alt="" />
                                <Link to={country.alpha3Code}>{country.name.common}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CountriesList
