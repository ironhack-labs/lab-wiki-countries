
import { useState } from "react";
import { Navigate } from "react-router-dom";

function HomePage() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    if(!isLoggedIn) return <Navigate to="/error"/>
  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
    
    </div>
  );
}

export default HomePage;
