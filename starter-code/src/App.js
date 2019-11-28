import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ListGroup from "./components/ListGroup";

const NotFound = () => {
  return <div>404 not found</div>;
};

function App() {
  return (
    <div>
      <Navbar />
      <ListGroup />
    </div>
  );
}

export default App;
