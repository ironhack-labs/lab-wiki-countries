function CountriesDetails() {
  return (
    <>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>Paris</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>
          551695 km
          <sup>2</sup>
        </td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            {/* list every border */}
            <li>
              <a href="/AND">Andorra</a>
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
}

export default CountriesDetails;
