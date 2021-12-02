import './CountryDetails.css'


const CountryDetails = props => {

    const { search } = props.location
    const searchParams = new URLSearchParams(search)

    const country = searchParams.get('cca3')

    return (
        <>
            <div>
                <p>this is {country}</p>
            </div>
        </>
    )
}


export default CountryDetails