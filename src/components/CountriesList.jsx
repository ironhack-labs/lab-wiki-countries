import { useParams, Link } from 'react-router-dom';
import countriesData from '../countries.json';

const CountriesList = () => {
    // const [countries, setCountries] = useState(countriesData);
    return (
        <div
            className="col-5 text-start"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}>

            <div className="list-group">
                {countriesData.map((country) => {
                    return (
                        <Link
                            to={country.alpha3Code}
                            className="text-decoration-none border p-4 d-flex justify-content-center"
                            key={country.alpha3Code}>
                            <img
                                className="mx-3"
                                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            <p>{country.name.common}</p>
                        </Link>
                    );
                })}
            </div>

        </div>
    );

};

export default CountriesList;