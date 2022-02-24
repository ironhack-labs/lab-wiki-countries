export default function CountryDetails(props) {

  return (
    <div className="CountryDetails">
      <p>{props.capital}</p>
      <p>{props.area}</p>
      <ul>
      {props.borders?.map((elm) => {
          return (
              <li>{elm}</li>
          )
      })}
      
      </ul>
    </div>
  );
}
