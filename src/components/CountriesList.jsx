import { Link } from "react-router-dom";

function CountriesList( {oneCountry} ) {
    // let smallFlag = oneCountry.alpha2code.toLowerCase()
    let smallFlag = oneCountry.alpha2code;
    
    // console.log("aplha 2 code", smallFlag);
    // console.log("aplha 3  code", oneCountry.alpha3Code);

   
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
            <Link className="list-group-item list-group-item-action" to={`/details/${oneCountry.alpha3Code}`}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${smallFlag}.png`} alt="flag"/> 
              {oneCountry.name.official}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
