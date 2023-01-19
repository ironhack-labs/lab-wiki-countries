import { Link } from 'react-router-dom';

export default function CountriesList({ data }) {
  return (
    <div className="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {data.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              href="/ABW"
            >
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                }}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt=""
                  width={30}
                  height={20}
                />
                {country.name.common}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
