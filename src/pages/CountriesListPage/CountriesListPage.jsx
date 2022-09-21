import ListCountries from "../../components/ListCountries/ListCountries"
const CountriesList = ({ countries }) => {
    return (
        <div className="col-5 firstCol ">
            <ListCountries countries={countries} />
        </div>
    )
}




export default CountriesList