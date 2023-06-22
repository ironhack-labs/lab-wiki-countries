
function CountriesList (props){


        
    return (
 <div className="container">
    {/* Bootstrap row wrapper div */}
    <div className="row">
      {/* Countries List (Bootstrap column) */}
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        
        {props.countriesList.map((countryObj) => {
            return <div key={countryObj.alpha3Code} className="list-group">
                      <a className="list-group-item list-group-item-action" href={countryObj.alpha3Code}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryObj.alpha2Code.toLowerCase()}.png`} alt="flag" /> {countryObj.name.official} {countryObj.alpha3Code}
                      </a>
                    </div>
        })}
        
      </div>
    </div>
  </div>
    )
}

export default CountriesList;