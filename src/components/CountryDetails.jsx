import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';




const CountryDetails = ({ countries }) => {
    console.log('---------------->', countries)

    const [eachCountry, setEachCountry] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const find = countries.find((countryDetail) => countryDetail.alpha3Code === id);
        // console.log('------------------------->', countryDetail)
        // console.log('------------------------>', find)
        setEachCountry(find);
    }, [id]);

    // console.log(eachCountry)
    // console.log(eachCountry.name.country)

    return (

        <div>
            {/* <h1>{eachCountry?.name?.common}</h1> */}
            {/* <img src={`https://flagpedia.net/data/flags/w702/${CountryDetails.alpha2Code.toLowerCase()}.webp`} alt="alternative-image" /> */}

            <h4>{eachCountry?.name?.common}</h4>


        </div>
    )
}

export default CountryDetails