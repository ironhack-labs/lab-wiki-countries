import React from 'react'

function CountryDetails (props) {
    
        console.log('what is here:', props.countries)
        console.log('what is params:', props.match.params.id)
        return (
            <>
                <p>Hello world From Details</p>
                {/* {props.countries.map(country => {
                let result = '';
               console.log('what is name dsdsad:', country.name.official)
                    if ( country.cca3 === props.match.params.id)
                    result = country.name.official;



                return result
                })
                } */}

                {props.countries.map(country => {
                    if ( country.cca3 === props.match.params.id)
                    return ( 
                        <>  
                            <div key={country.cca3}>
                                <h2>{country.name.official}</h2>
                                <p>Capital : {country.capital }</p>
                                <p>Area : {country.area + ' sqm'}</p>
                                <p>Borders : {country.borders.map(border => {
                                    return border + ' '
                                })}
                                </p>
                            </div>
                        </>
                    )
                })}
            </>
        );
    
}

export default CountryDetails;