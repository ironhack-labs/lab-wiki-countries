function CountriesList(props) {

  return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {props.countriesObj.map((countries, index) => {
                return (
                  <a
                    class="list-group-item list-group-item-action"
                    href={`/${countries.alpha3Code}`}>


                    {countries.alpha2Code} {countries.name.common}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );}

export default CountriesList