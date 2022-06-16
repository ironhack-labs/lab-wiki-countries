function CountriesList({list}) {
    return (
        list.map((singleCountry) => (
        <div><a href={`/${singleCountry.alpha3Code}`}>{singleCountry.alpha3Code} {singleCountry.name.common}</a></div>
        ))
        )
    }

    


export default CountriesList