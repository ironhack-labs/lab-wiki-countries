import Countries from '../../countries.json'
import DetailCard from '../detail-card/detail-card'


const Details = props => {


    const param = props.match.params.Detail

    const countryDetail = Countries.filter(elm => elm.cca3 === param)

    return (
        <>

            {countryDetail.map((elm, idx) => <DetailCard key={idx} name={elm.name.common} capital={elm.capital} flag={elm.flag} area={elm.area} borders={elm.borders} />)}

        </>
    )
}







export default Details