import { useState } from 'react';

function CountryList(props) {
  return (
    <div class="list-group">
      <a className="list-group-item list-group-item-action" href="/ABW">
        {props.alpha3Code}
      </a>
    </div>
  );
}

export default CountryList;
