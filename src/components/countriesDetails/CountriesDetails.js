import { Link } from 'react-router-dom'

import Countries from '../../countries.json'

const CountriesDetails = props => {

  const country = Countries.filter(elm => elm.cca3 === props.match.params.cca3)
  
  console.log(country)

    return (
        <div className="col-7">
        
        <h1>country.name.official</h1>
        

        <table className="table">
          
          <thead></thead>
          
          <tbody>
              <tr>
                  <td Style="width: 30%;">Capital</td>
                  <td>Paris</td>
              </tr>

              <tr>
                  <td>Area</td>
                  <td>551695 km<sup>2</sup></td>
              </tr>

                <tr>
                    <td>Borders</td>
                  <td>
                    <ul><li><Link to='TO-DO'>Paises Name</Link></li></ul>
                  </td>
              
                </tr>
            
            </tbody>
          </table>
        </div>
    )

}

export default CountriesDetails