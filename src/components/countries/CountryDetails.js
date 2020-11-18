import React, {useState, useEffect} from 'react';

function CountryDetail(props) {
    const [state, setState] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://countries.tech-savvy.tech/countries');
        const data = await response.json();
        console.log(props)
        setState(data);
    }, [state]);

    return (
        <div className="col-7">
            <h1>{state.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:"30%",}}>Capital</td>
                  <td>{state.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{state.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {state.borders.map((count, i)=>{
                         return <li key={i}>{count.borders}</li>
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
}

export default CountryDetail;