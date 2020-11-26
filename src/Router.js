import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetails from './pages/CountryDetails'
// import Student from './pages/student/Student'

//Dummy components
// const Profile = () => <h1 className="title">Profile</h1>
// const Student = () => <h1 className="title">Student</h1>

function RouterApp() {
  return (
    <Router>

    <div className="container">
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <hr /> */}
      <Navbar/>
      <div className="row">
        <div className="col">
          <CountriesList/>
          {/* <ul>
            {students.map(student => (
              <li>
                <Link to={`/student/${student.id}`}>
                  {student.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="col-8">
          <Switch>
            <Route component={CountryDetails} exact path='/country/:cca3' />
          </Switch>
        </div>
      </div>
    </div>

    </Router>
  )
}

export default RouterApp