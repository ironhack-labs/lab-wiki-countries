

const CountriesList = ({changeCountry, countries}) => {

    console.log()

    return (
        <div className="overflow-auto" style={{height:600}}>
            {countries.map(country => {
                return (
                
                    <button className="btn btn-outline-secondary w-100 d-flex justify-content-around align-items-center" onClick={() => changeCountry(country)} key={country.ccn3} c>
                        <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt="banderita"  />
                        <span className="ms-2">{country.name}</span>
                    </button>
                )
            })}

        </div>
    );
}

export default CountriesList;