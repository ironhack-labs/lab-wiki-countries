import {useParams} from 'react-router-dom'
import {CountriesList, CountryDetails} from '../../components'
import data from '../../countries.json'


function Home(){
    const params = useParams()

    const index = data.findIndex(object => object["alpha3Code"]=params)

    const countryData = data[index]
    console.log(params, countryData)

    return (
        <div className="container">
            <div className="row">
                <CountriesList/>
                <CountryDetails/>
            </div>
        </div>        
    )
}

export default Home;
