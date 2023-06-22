

function CountriesList(props) {

    return (
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {props.countriesObj.map((paises, index) => {
                  return (
                    <a
                      class="list-group-item list-group-item-action"
                      href={`/${paises.alpha3Code}`}>
                      
                      
                      {paises.alpha2Code} {paises.name.common}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    );}

export default CountriesList