export default function CountryDetails(props) {
  return (
    <div className="CountryDetails">
      <p>{props.capital}</p>
      <p>{props.area}</p>
      <p>{props.borders}</p>
    </div>
  );
}
