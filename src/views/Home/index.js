import {useParams} from 'react-router-dom'
import {CountriesList, CountryDetails} from '../../components'

function Home(props){
    const params = useParams()
    let countryData = props.json[props.json.findIndex(object => object["alpha3Code"]===params.country)]
    return (
        <div className="container">
            <div className="row">
                <CountriesList/>
                <CountryDetails countryData={countryData}/>
            </div>
        </div>        
    )
}

export default Home;
