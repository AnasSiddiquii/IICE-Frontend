import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const BootNav = (props) => {
  
  const auth = localStorage.getItem('user')
  const authstd = localStorage.getItem('student')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  // change theme
  const changeTheme = () => {
    props.theme2(true)
  }

  return (
    <div>
        <nav className="navbar fixed navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand nav-link text-primary mt-2" to="#" onClick={changeTheme} ><b>IICE-Portal</b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            
            {
              !auth && !authstd ?
                <ul className="navbar-nav">
                  
                  {/* Dashboard */}
                  <li className="nav-item mt-1">
                    <Link className="nav-link active" to="/">Dashboard</Link>
                  </li>

                  {/* Add Detail */}
                  <li className="nav-item mt-1">
                    <Link className="nav-link active" to="/login">Login</Link>
                  </li>

                  {/* Payment */}
                  <li className="nav-item mt-1">
                    <Link className="nav-link active" to="/signup">Signup</Link>
                  </li>
                  
                  {/* Change Theme */}
                  <li className="nav-item mt-1" onClick={changeTheme}>
                    <Link className="nav-link active" to="#">Change Theme</Link>
                  </li>

                </ul>:
                null
            }
            
            {
              auth ?  
                <ul className="navbar-nav">
                  
                  {/* Dashboard */}
                  <li className="nav-item">
                    <Link className="nav-link active mt-2" to="/adminhome">Dashboard</Link>
                  </li>

                  {/* Manage Universities */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Universities</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <Link className="nav-link" to="/universities">Universities</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/adduniversity">Add University</Link>
                      </li>
                    </ul>
                  </li>
                  
                  {/* Manage Courses */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Courses</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <Link className="nav-link" to="/courses">Courses</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addcourse">Add Course</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/specialisations">Specialisations</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addspecialisation">Add Specialisation</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Sessions */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Sessions</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <Link className="nav-link" to="/sessions">Sessions</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addsession">Add Session</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Fee Structure */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Fee Structure</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <Link className="nav-link" to="/Fee structure">Fee Structure</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addfeestructure">Add Fee Structure</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Manage EMI Tenures */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage EMI Tenures</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <Link className="nav-link" to="/emitenures">EMI Tenures</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addemitenure">Add EMI Tenure</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Students */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Students</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <Link className="nav-link" to="/students">Students</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addstudent">Add Student</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Franchises */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Franchises</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <Link className="nav-link" to="/franchises">Franchises</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addfranchise">Add Franchise</Link>
                      </li>
                    </ul>
                  </li>
                  
                  {/* Manage Details */}
                  <li className="nav-item mt-2">
                    <Link className="nav-link active" to="/details">Details</Link>
                  </li>

                  {/* Add Admin */}
                  <li className="nav-item mt-2">
                    <Link className="nav-link active" to="/adminsignup">Add&nbsp;Admin</Link>
                  </li>

                  {/* Change Theme */}
                  <li className="nav-item mt-2" onClick={changeTheme}>
                    <Link className="nav-link active" to="#">Change&nbsp;Theme</Link>
                  </li>

                  {/* Logout */}
                  <li className="nav-item mt-2">
                    <Link className="nav-link active" to="/" onClick={logout} >Logout&nbsp;({JSON.parse(auth).name})</Link>
                  </li>

                </ul>:
                null
            }

            {
              authstd ?
                <ul className="navbar-nav">

                  {/* Add Detail */}
                  <li className="nav-item mt-2">
                    <Link className="nav-link active" to="/adddetail">Add Detail</Link>
                  </li>

                  {/* Payment */}
                  <li className="nav-item mt-2">
                    <Link className="nav-link active" to="/payment">Payment</Link>
                  </li>
                  
                  {/* Change Theme */}
                  <li className="nav-item mt-2" onClick={changeTheme}>
                    <Link className="nav-link active" to="#">Change Theme</Link>
                  </li>

                  {/* Logout */}
                  <li className="nav-item mt-2">
                    <Link className="nav-link active" to="/" onClick={logout} >Logout&nbsp;({JSON.parse(authstd).name})</Link>
                  </li>

                </ul>:
                null
            }
            </div>
        </div>
        </nav>
        <h1 className='text-primary col-4 mt-4'>&nbsp;</h1>
    </div>
  )
}

export default BootNav