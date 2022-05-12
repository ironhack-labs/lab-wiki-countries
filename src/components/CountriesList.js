

function CountriesList(props) {

  console.log(props.listOfCountries.name.common);
   
    const alpha3Code = props.listOfCountries.alpha3Code
    const commonName = props.listOfCountries.name.common

    return (
        <div>
            <a href="/{alpha3Code}">{commonName}</a>
            <h1></h1>
            
                
               
       
        </div>
    )
}


export default CountriesList;