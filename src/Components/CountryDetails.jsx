import React from 'react';
import JSONcountries from './../countries.json';

const CountryDetails = (props) => {

    const countryID = props.match.params.cca3name;

    const foundCountry = JSONcountries.find((country) => country.cca3 === countryID);
    console.log(foundCountry)

    // const paysFrontaliers = 
    // .forEach((pays) => { pays.borders !== undefined})
    console.log(foundCountry);
    return (
        <div>
            <h1>This country is {foundCountry.name.common}</h1>
            <p>
                What informations do we have on {foundCountry.name.common}? <br />
                We know that {foundCountry.name.common}'s flag is: {foundCountry.flag} <br />
                {foundCountry.name.common} shares frontiers with these countries: <br />
                
                    {/* {foundCountry.map((country) => {
                        return (
                        <div key={country.borders}>
                            test
                        </div>)
                    })} */}
            </p>

        </div>
    )
}

export default CountryDetails;
    // const countryID = props.match.params.cca3;

    // const countries = JSONcountries.find((country) => country.cca3);