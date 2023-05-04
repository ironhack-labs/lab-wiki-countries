import { Link } from "react-router-dom"


function CountriesList({ countries }){

    return (
        <div className="container">
            <div className="row">
             <div className="col-5 d-flex flex-column" style={{ maxHeight: '85vh', overflow: 'scroll' }}>
                <div className="list-group">
                    {countries.map(country=> {
                        return(
                            <Link className="list-group-item list-group-item-action d-flex flex-column align-items-center" to={`/${country.alpha3Code}`} >
                            <img src={`https://flagcdn.com/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common}-flag`} />
                            <p>{country.name.common}</p>
                            </Link>
                        )
                    })}
                    </div>
                 </div>
            </div>
         </div>
    )
}

export default CountriesList

{/* <div class="container">
<!-- Bootstrap row wrapper div -->
<div class="row">
  <!-- Countries List (Bootstrap column) -->
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <a class="list-group-item list-group-item-action" href="/ABW"
        >🇦🇼 Aruba</a
      >
      <a class="list-group-item list-group-item-action" href="/AFG"
        >🇦🇫 Afghanistan</a
      >
      <a class="list-group-item list-group-item-action" href="/AGO"
        >🇦🇴 Angola</a
      >
      <a class="list-group-item list-group-item-action" href="/AIA"
        >🇦🇮 Anguilla</a
      >
      <a class="list-group-item list-group-item-action" href="/ALA"
        >🇦🇽 Åland Islands</a
      >
      <a class="list-group-item list-group-item-action" href="/ALB"
        >🇦🇱 Albania</a
      >
      <a class="list-group-item list-group-item-action" href="/AND"
        >🇦🇩 Andorra</a
      >
      <a class="list-group-item list-group-item-action" href="/ARE"
        >🇦🇪 United Arab Emirates</a
      >
      <a class="list-group-item list-group-item-action" href="/ARG"
        >🇦🇷 Argentina</a
      >
      <a class="list-group-item list-group-item-action" href="/ARM"
        >🇦🇲 Armenia</a
      >
      <a class="list-group-item list-group-item-action" href="/ASM"
        >🇦🇸 American Samoa</a
      >
      <a class="list-group-item list-group-item-action" href="/ATA"
        >🇦🇶 Antarctica</a
      >
      <a class="list-group-item list-group-item-action" href="/FLK"
        >🇫🇰 Falkland Islands</a
      >
      <a
        class="list-group-item list-group-item-action active"
        href="/FRA"
        >🇫🇷 France</a
      >
      <a class="list-group-item list-group-item-action" href="/ZWE"
        >🇿🇼 Zimbabwe</a
      >
    </div>
  </div> */}