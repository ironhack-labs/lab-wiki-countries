import React from 'react'

function List(props) {
    return (
        <div class="list-group" id="lista">
            {props.data.map((country,indx)=>
                <a id={indx} class="list-group-item list-group-item-action" href={`/countries/${country.cca3}`}><img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.name.common} /> {country.name.common}</a>
            )}
        </div>
    )
}

export default List

