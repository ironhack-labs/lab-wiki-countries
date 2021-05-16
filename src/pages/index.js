import CountryDetails from "../components/countryDetails/CountryDetails"
import CountriesList from '../components/countriesList/CountriesList'

const MainPage = props => {
    return (
        <div className="row">
            <div className="col-1"></div>
            <div className="col-4">
                <CountriesList countryCode={props.match.params.countryCode}/>
            </div>
            <div className="col-6">
                <CountryDetails countryCode={props.match.params.countryCode}/>
            </div>
            <div className="col-1"></div>
        </div>
    )
}

export default MainPage;