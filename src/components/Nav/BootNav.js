import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

const BootNav = (props) => {
  
  const auth = localStorage.getItem('admin')
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
        <nav className="navbar navbar-dark bg-dark fixed navbar-expand-lg">
        <div className="container-fluid">
            <NavLink className="navbar-brand nav-link text-success mt-2" to="#" onClick={changeTheme} ><b>IICE-Foundation</b></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            
            {
              !auth && !authstd ?
                <ul className="navbar-nav">
                  
                  {/* Dashboard */}
                  <li className="nav-item mt-1">
                    <NavLink className="nav-link active" to="/">Dashboard</NavLink>
                  </li>

                  {/* Admin */}
                  <li className="nav-item mt-1">
                    <NavLink className="nav-link active" to="/admin">Admin</NavLink>
                  </li>

                  {/* Login */}
                  <li className="nav-item mt-1">
                    <NavLink className="nav-link active" to="/login">Login</NavLink>
                  </li>
                  
                  {/* Change Theme */}
                  <li className="nav-item mt-1" onClick={changeTheme}>
                    <NavLink className="nav-link active" to="#">Change Theme</NavLink>
                  </li>

                </ul>:
                null
            }
            
            {
              auth ?  
                <ul className="navbar-nav">
                  
                  {/* Manage Universities */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Universities</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/universities">Universities</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/adduniversity">Add University</NavLink>
                      </li>
                    </ul>
                  </li>
                  
                  {/* Manage Courses */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Courses</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/courses">Courses</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addcourse">Add Course</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/specialisations">Specialisations</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addspecialisation">Add Specialisation</NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Sessions */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Sessions</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/sessions">Sessions</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addsession">Add Session</NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Fee Structure */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Fee Structure</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/feestructure">Fee Structure</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addfeestructure">Add Fee Structure</NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Manage EMI Tenures */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage EMI Tenures</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/emitenures">EMI Tenures</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addemitenure">Add EMI Tenure</NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Students */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Students</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/students">Students</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addstudent">Add Student</NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Manage Franchises */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Manage Franchises</button>
                    <ul className="dropdown-menu p-2">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/franchises">Franchises</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/addfranchise">Add Franchise</NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Others */}
                  <li className="nav-item dropdown">
                    <button className="btn dropdown-toggle mt-2" data-bs-toggle="dropdown" aria-expanded="false">Others</button>
                    <ul className="dropdown-menu p-2">

                      {/* Dashboard */}
                      <li className="nav-item">
                        <NavLink className="nav-link active mt-2" to="/adminhome">Dashboard</NavLink>
                      </li>
                      
                      {/* Referral % */}
                      <li className="nav-item mt-2">
                        <NavLink className="nav-link active" to="/referral">Referral</NavLink>
                      </li>
                      
                      {/* Manage Details */}
                      <li className="nav-item mt-2">
                        <NavLink className="nav-link active" to="/details">Details</NavLink>
                      </li>

                      {/* Add Admin */}
                      <li className="nav-item mt-2">
                        <NavLink className="nav-link active" to="/adminsignup">Add&nbsp;Admin</NavLink>
                      </li>

                      {/* Change Theme */}
                      <li className="nav-item mt-2" onClick={changeTheme}>
                        <NavLink className="nav-link active" to="#">Change&nbsp;Theme</NavLink>
                      </li>

                      {/* Logout */}
                      <li className="nav-item mt-2 text-align-right">
                        <NavLink className="nav-link active" to="/" onClick={logout} >Logout&nbsp;({JSON.parse(auth).name})</NavLink>
                      </li>

                    </ul>
                  </li>

                </ul>:
                null
            }

            {
              authstd ?
                <ul className="navbar-nav">

                  {/* Dashbord */}
                  <li className="nav-item mt-2">
                    <NavLink className="nav-link active" to="/studenthome">Dashbord</NavLink>
                  </li>

                  {/* Fee Structure */}
                  <li className="nav-item mt-2">
                    <NavLink className="nav-link active" to="/fees">Fee Structure</NavLink>
                  </li>
                  
                  {/* Add Detail */}
                  <li className="nav-item mt-2">
                    <NavLink className="nav-link active" to="/adddetail">Add Detail</NavLink>
                  </li>

                  {/* Change Theme */}
                  <li className="nav-item mt-2" onClick={changeTheme}>
                    <NavLink className="nav-link active" to="#">Change Theme</NavLink>
                  </li>

                  {/* Logout */}
                  <li className="nav-item mt-2">
                    <NavLink className="nav-link active" to="/" onClick={logout} >Logout&nbsp;({JSON.parse(authstd).name})</NavLink>
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