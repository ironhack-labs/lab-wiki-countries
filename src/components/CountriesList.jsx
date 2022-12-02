import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <Wrapper className="container">
      {countries.map((country) => {
        return (
          <div
            className="col-5"
            style={{
              marginLeft: '15px',
              maxHeight: '90vh',
              overflow: 'scroll',
            }}
            key={country.alpha3Code}
          >
            <div className="list-group">
              <div className="list-group-item   list-group-item-action">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                />
                <h3>
                  <Link to={`/${country.alpha3Code}`}>
                    {country.name.common}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    width: 50%;
    height: 85%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .list-group-item {
    margin-bottom: 15px;
  }
`;

export default CountriesList;
