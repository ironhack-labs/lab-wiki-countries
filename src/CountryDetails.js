import './CountryDetails.css'

const CountryDetails = (props) => {
    return (
        <>
            <div >
                {console.log(props.name)}
                <p> {props.name.official}</p>
                {/*  <img src="https://www.countryflags.io/"{ props.cca3}"/flat/64.png{}" alt"image" /> */}

            </div>

        </>
    )
}


export default CountryDetails