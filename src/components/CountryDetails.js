import db from "../countries.json"

function CountryDetails(props){
const details=db.find((data)=> data.alpha3Code === props.CountryDetails);
console.log(db[0].alpha3Code)


    return(
        <div></div>
    )
}
export default CountryDetails;