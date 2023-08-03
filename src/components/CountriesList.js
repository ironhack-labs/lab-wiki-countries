function CountriesList({ countries }) {

    const divStyle = {
        maxHeight: "90vh",
        overflow: "scroll"
    };

    return (
        <div className="col-5" style={divStyle}>
            <div className="list-group">
            {countries.map((country) => {

                  return  ( 
                        <>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width="50px" />
                            <a className="list-group-item list-group-item-action" href={`/${country.alpha3Code}`}>{country.name.common}</a>
                        </>
           ) })}
            </div>
        </div>
    );
}

export default CountriesList;