import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-5" style={"max-height: 90vh; overflow: scroll"}>
          <div class="list-group">

          <a class="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
