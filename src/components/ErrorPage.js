import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <p>404 Turn Back</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default ErrorPage;
