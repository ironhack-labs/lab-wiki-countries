
import Country from "../Country/Country";
function CountriesList({ filterCountry, countries }) {

    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
                {countries.map(country => <Country filterCountry={filterCountry} key={country.alpha3Code} {...country}></Country>)}
            </div>
        </div>
    );
}

export default CountriesList;
