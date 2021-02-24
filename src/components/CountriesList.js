

const CountriesList = ({countries}) => {
    return (
        <ul>
            {countries.map((elm, idx) => {
                return(
                    <div className = "list-group-item list-group-item-action" key={idx}>
                        <a href={"/" + elm.cca3}>{elm.flag} {elm.name.common}</a>
                    </div>
                )
            })}
        </ul>
    )
}

export default CountriesList