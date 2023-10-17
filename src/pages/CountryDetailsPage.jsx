import { useParams } from "react-router-dom";


function CountryDetailsPage() {
  const { countryId } = useParams();

  return (
    <div className="container mt-4">
      <h1>Detalles del país</h1>
      <p>País seleccionado: {countryId}</p>
    </div>
  );
}

export default CountryDetailsPage;