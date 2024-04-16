import { Link } from "react-router-dom";

function TableCountries({ name, alpha2Code, alpha3Code }) {

  return (
    <div className="">
      <table className="mx-auto">
        <tbody className="border">
          <tr>
            <td className="border px-4 py-2">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt="Placeholder"
                className=" min-h-[48px] min-w-[62px]"
              />
            </td>
            <td className="border px-4 py-2 w-52">
              <Link to={alpha3Code}>
                {name.common}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCountries;