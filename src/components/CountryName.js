

export default function CountryName(props){
    const{countriesArr,countryId}=props

    const countryName = countriesArr?.find(countryObj=>countryObj.alpha3Code===countryId).name.common
    console.log(countryName)
    return(
        <>
            {countryName}<br/>

        </>
    )
}