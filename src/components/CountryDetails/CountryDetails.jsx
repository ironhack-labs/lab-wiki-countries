import {useParams} from 'react-router-dom'
import './CountryDetails.css'

const CountryDetails = ({countries}) => {
    const params = useParams();
    //const cntry = props.filter(country=>props.name.includes(params.countryId))
    //const cntrydtail = countries.filter(country=> country.alpha3Code.includes(params.countryId))
    const cntrydtail = countries.find(country=> country.alpha3Code === params.countryId)
    console.log('Que es params:',params.countryId)
    console.log('Que es props:', cntrydtail.alpha2Code.toLowerCase())
    return(
        <div className='container-ctry-details'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${cntrydtail.alpha2Code.toLowerCase()}.png`} alt='Country' className='img-ctry-datails'/>
            <p className='name-ctry-details'>{cntrydtail.name.official}</p>
        </div>
    );
};


export default CountryDetails;