import React from 'react';

function CountriesList({ countries }) {
  return (
    <div style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group d-flex align-items-center justify-content-center">
        {countries.map((country) => (
          <div className="card">
            <div className="card-body">
              <imgs
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <a className="list-group-item list-group-item-action" href="/AGO">
                🇦🇴 Angola
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
