import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

function CountryDetails(props) {

    const { countryId } = useParams()

    const [currentCountry, setCurrentCountry] = useState(null)

    useEffect(() => {
        setCurrentCountry(props.countries.filter((e) => { return e.alpha3Code == countryId })[0]);
    }, [countryId]);

    //console.log("countryId-alpha3: ", countryId);
    console.log("current: ", currentCountry);

    // const renderDetails = () => {

    //     return (
    //         <>
    //             <h1>-This is detail page: {countryId}</h1>
    //             <h1>Name: {currentCountry.name.official}</h1>
    //             <h4>Capital: {currentCountry.name.capital}</h4>
    //             <h4>Area: {currentCountry.name.area}</h4>
    //             <h5>XXadd border list hereXX</h5>
    //         </>
    //     );
    // }


    return (
        <>
            {currentCountry === null
                ? <p>loading...</p>
                : <p>have data</p>
                // : renderDetails()
            }
        </>
    )

}

export default CountryDetails;