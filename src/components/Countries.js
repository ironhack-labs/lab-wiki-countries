import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';


const Countries = (props) => {
    let hasProps = props ? true : false

    return (
        <div class="countries">
            <CountriesList />
            <CountryDetails {hasProps ? props : null} />
        </div>


    )



}

export default Countries
