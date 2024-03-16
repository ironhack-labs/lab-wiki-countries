function HomePage({countries}) {
    return(
        <div>
        <h1>WikiCountries: Your Guide to the World</h1>
        {countries.map((country) =>
            <p key={country._id}>{country.name.common}</p>
            )}
        </div>
    )
}

export default HomePage;
