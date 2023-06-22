function CountriesList(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            {/* style="max-height: 90vh; overflow: scroll" */}
            <div className="list-group">
              {props.listOfCountries.map((countriesObj, index) => {
                const flag = countriesObj.alpha2Code.toLowerCase();
                return (
                  <div key={countriesObj.alpha3Code}>
                    <a
                      className="list-group-item list-group-item-action"
                      href={`/${countriesObj.alpha3Code}`}
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png`}
                        alt={countriesObj.alpha3Code}
                      ></img>
                      {countriesObj.name.official}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountriesList;
