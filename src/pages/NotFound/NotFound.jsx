import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to="/" className="btn btn-outline-secondary">Volver al incio</Link>
        </div>
    );
};

export default NotFound;