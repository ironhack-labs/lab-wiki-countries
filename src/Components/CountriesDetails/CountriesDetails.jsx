import { Link, useParams } from "react-router-dom"

const CountriesDetails = ({ countriesData }) => {

    const { country_id } = useParams()

    const foundCountry = countriesData.find(elm => elm.alpha3Code === country_id)

    // const getOneData = ({ country_id }) => {
    //     axios
    //         .get(`https://ih-countries-api.herokuapp.com/countries/${country_id}`)
    //         .then((response) => {
    //             console.log(response)
    //             setOneCountry(response.data)
    //         })
    //         .catch((error) => console.log(error)
    //         )
    // };

    // useEffect(() => {
    //     getOneData();
    //     console.log(oneCountry)
    // }, []);
    console.log(foundCountry)

    return (
        <><div className="detailsCard">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
                alt="" className="fullFlag" />
            <h2>Country: {foundCountry.name.common}</h2>
            <hr />
            <p>Capital: {foundCountry.capital}</p>
            <hr />
            {
                foundCountry.borders.map(code => {
                    return (<div key={code} className='borderName'>
                        <article className="eachBorder">
                            <Link to={`/countries/${code}`}>{countriesData.find(elm => elm.alpha3Code === code).name.common}</Link>
                        </article>

                    </div>)
                })
            }
        </div>
        </>
    )
}


export default CountriesDetails