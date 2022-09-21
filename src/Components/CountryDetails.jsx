import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AllCountries from '../countries.json'
import { Link } from 'react-router-dom';


const CountryDetails = () => {
    const idCountry = useParams();

    console.log(idCountry.id)
    const specificCountry = AllCountries.find((country) => country.alpha3Code === idCountry.id)
    console.log(specificCountry)
    return (
        <div className="AllflexDetails">
            <div className="flexImgAndCapital" >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${specificCountry.alpha2Code.toLowerCase()}.png`} alt="" />
                <h3>{specificCountry.name.official}</h3>
            </div>
            <div>
                <div className="flexDetails">
                    <p>CAPITAL:</p>
                    <p>{specificCountry.capital[0]}</p>

                </div>
                <div className="flexDetails">
                    <p>AREA:</p>
                    <p>{specificCountry.area}km²</p>
                </div>
                <div className="flexDetails">
                    <p>BORDERS:</p>
                    {
                        specificCountry.borders.map((front) => {
                            return (
                                <div key={front}>
                                    <ul>
                                        <li>
                                            <Link to={`/country-details/${front}`}>{front}</Link>
                                        </li>
                                    </ul>
                                </div>

                            )
                        })
                    }
                </div>


            </div>

        </div>

    )
}

export default CountryDetails


