const CountryDetails = props => {
    const { name } = props.match.params
    return (
        <>
            <h1>{name}</h1>
            <p>Capital {capital}</p>
            <p>Area {area}</p>
            <p>Borders {borders}</p>
        </>
    )
}

export default CountryDetails