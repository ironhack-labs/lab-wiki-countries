import countries from '../countries.json';

const CountriesList = () => {
    return (
        <div>
            <p>Hola</p>
            {countries.map(country => {
                return (
                    <div className="border border-dark d-flex justify-content-center align-items center">
                        {/* <img src={`https://www.countryflags.io/${country.cca3}/flat/64.png`} alt="banderita" className="me-2" /> */}
                        <p>{country.name}</p>
                    </div>
                )
            })}

        </div>
    );
}

export default CountriesList;