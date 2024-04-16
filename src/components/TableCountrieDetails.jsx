import { Link } from "react-router-dom";

function TableCountrieDetails({ name, alpha2Code, capital, area, borders }) {

  return (
    <div className="">

      <div className="flex items-center justify-center my-5 gap-5">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
          alt="Country Flag"
          className=""
        />
        <h2>{name.common}</h2>
      </div>

      <table className="mx-auto">
        <tbody className="border">
          <tr>
            <td className="border px-4 py-2">
              <p>Capital</p>
            </td>
            <td className="border px-4 py-2 w-52">
                <p>{capital}</p>
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2">
              <p>Area</p>
            </td>
            <td className="border px-4 py-2 w-52">
                <p>{area}</p>
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2">
              <p>Borders</p>
            </td>
            <td className="border px-4 py-2 w-52">
                <ul>
                  {borders.map((border, index) => (
                    <Link to={`/${border}`} key={index}>
                      <li>{border}</li>
                    </Link>
                  ))}
                </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCountrieDetails;

/*
pais y bandera
capital:
area:
borders: 
*/