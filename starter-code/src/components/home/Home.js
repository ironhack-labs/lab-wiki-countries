import React from "react"
import {Link} from "react-router-dom"

const Home = () => (
  <div>
    <h1>Welcome to Wiki Countries !</h1>
    <Link to="/countries">
      <button>
        GO TO COUNTRIES LIST
      </button>
    </Link>
  </div>
)

export default Home