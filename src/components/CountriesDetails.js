function CountriesDetails ({ countriesArr }) {

    const borders = countriesArr.borders;
    for(let i = 0; i < borders.length; i++){
        
    }

    return(
        <div className="col-7">
            <h1>{countriesArr.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{countriesArr.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countriesArr.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
};

export default CountriesDetails;