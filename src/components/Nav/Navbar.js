import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from 'react-icons/fc';
import { IconContext } from 'react-icons';
import {NavLink, useNavigate} from 'react-router-dom';

const Navbar = (props) => {

  const auth = localStorage.getItem('admin')
  const authstd = localStorage.getItem('student')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/')
  }
 
  const [sidebar, setSidebar] = useState(false);
  const [universities, setUniversities] = useState(false);
  const [courses, setCourses] = useState(false);
  const [sessions, setSessions] = useState(false);
  const [emiTenures, setEMITenures] = useState(false);
  const [feeStructure, setFeeStructure] = useState(false);
  const [students, setStudents] = useState(false);
  const [franchises, setFranchises] = useState(false);

  // toggle sidebar n close submenu
  const showSidebar = () => { 
    setSidebar(!sidebar)
    if(sidebar===false){
      setUniversities(false)
      setCourses(false)
      setSessions(false)
      setEMITenures(false)
      setFeeStructure(false)
      setStudents(false)
      setFranchises(false)
    }
  }

  // toggle submenu
  const showUniversities = () => {setUniversities(!universities)};
  const showCourses = () => {setCourses(!courses)};
  const showSessions = () => {setSessions(!sessions)};
  const showEMITenures = () => {setEMITenures(!emiTenures)};
  const showFeeStructure = () => {setFeeStructure(!feeStructure)};
  const showStudents = () => {setStudents(!students)};
  const showFranchises = () => {setFranchises(!franchises)};
  
  // change theme
  const changeTheme = () => {
    props.theme1(!sidebar)
    showSidebar()
  }
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
        <div className='darknav fixed'>
          <NavLink to='#' className='menu-bars'>
            <FaIcons.FaBars className='bars' onClick={showSidebar} />
          </NavLink>
          {
            auth||authstd ?
            <div className='button'>
            <button className='btn btn-primary m-3'>
              <NavLink className="nav-link active text-white" to="/" onClick={logout} >Logout</NavLink>
            </button>
            </div>:
            <div className='button'>
            <button className='btn btn-primary m-3'>
              <NavLink className="nav-link active text-white" to="/login">Login</NavLink>
            </button>
            </div>
          }
        </div>

        {/* blankspace for navbar position */} 
        <h3 className='text-primary col-4 mt-4'>&nbsp;</h3>
        
        <nav className={sidebar ? `nav-menu active ${auth ? 'scroll' : 'no-scroll'}` : 'nav-menu'}>
          <div className='nav-menu-items'>

            <li className='navbar-toggle' onClick={showSidebar}>
              <NavLink to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li>

            {
              !auth && !authstd ?
                <ul className="navbar-nav">
                  
                  {/* Dashboard */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/">
                      <h4><FcIcons.FcBarChart /></h4>
                      <span>Dashboard</span>
                    </NavLink>
                  </li>

                  {/* Admin */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/admin">
                      <h4><FcIcons.FcBusinessman /></h4>
                      <span>Admin</span>
                    </NavLink>
                  </li>
                  
                  {/* Login */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/login">
                      <h4><FcIcons.FcManager /></h4>
                      <span>Login</span>
                    </NavLink>
                  </li>

                  {/* Change Theme */}
                  <li className="nav-text" onClick={changeTheme}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcRating /></h4>
                      <span>Change Theme</span>
                    </NavLink>
                  </li>
                  
                </ul>:
                null
            }

            {
              auth ?  
                <ul className="navbar-nav">
                  
                  {/* Welcome */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link active text-white" to="/adminhome">
                      <h4><FcIcons.FcBusinessman /></h4>
                      <span>Welcome {JSON.parse(auth).name}</span>
                    </NavLink>
                  </li>

                  {/* Dashboard */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link active text-white" to="/adminhome">
                      <h4><FcIcons.FcBarChart /></h4>
                      <span>Dashboard</span>
                    </NavLink>
                  </li>

                  {/* Manage Universities */}
                  <li className="nav-text" onClick={showUniversities}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcLibrary /></h4>
                      <span>Manage Universities ﹀</span>
                    </NavLink>
                  </li>
                  {
                    universities ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/universities"><span> 〉Universities </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/adduniversity"><span> 〉Add University </span></NavLink>
                      </li>
                    </> :
                    null
                  }
                  
                  {/* Manage Courses */}
                  <li className="nav-text" onClick={showCourses}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcReading /></h4>
                      <span>Manage Courses ﹀</span>
                    </NavLink>
                  </li>
                  {
                    courses ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/courses"><span> 〉Courses </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/addcourse"><span> 〉Add Course </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/specialisations"><span> 〉Specialisations </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/addspecialisation"><span> 〉Add Specialisation </span></NavLink>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage Sessions */}
                  <li className="nav-text" onClick={showSessions}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcCalendar /></h4>
                      <span>Manage Sessions ﹀</span>
                    </NavLink>
                  </li>
                  {
                    sessions ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/sessions"><span> 〉Sessions </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/addsession"><span> 〉Add Session </span></NavLink>
                      </li>
                    </> :
                    null
                  }
                  
                  {/* Manage Fee Structure */}
                  <li className="nav-text" onClick={showFeeStructure}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcCurrencyExchange /></h4>
                      <span>Manage Fee Structure ﹀</span>
                    </NavLink>
                  </li>
                  {
                    feeStructure ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/feestructure"><span> 〉Fee Structure </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/addfeestructure"><span> 〉Add Fee Structure </span></NavLink>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage EMI Tenures */}
                  <li className="nav-text" onClick={showEMITenures}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcOvertime /></h4>
                      <span>Manage EMI Tenures ﹀</span>
                    </NavLink>
                  </li>
                  {
                    emiTenures ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/emitenures"><span> 〉EMI Tenures </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/addemitenure"><span> 〉Add EMI Tenure </span></NavLink>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage Students */}
                  <li className="nav-text" onClick={showStudents}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcConferenceCall /></h4>
                      <span>Manage Students ﹀</span>
                    </NavLink>
                  </li>
                  {
                    students ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/students"><span> 〉Students </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/addstudent"><span> 〉Add Student </span></NavLink>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage Franchises */}
                  <li className="nav-text" onClick={showFranchises}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcOrganization /></h4>
                      <span>Manage Franchises ﹀</span>
                    </NavLink>
                  </li>
                  {
                    franchises ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/franchises"><span> 〉Franchises </span></NavLink>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <NavLink className="nav-link text-white" to="/addfranchise"><span> 〉Add Franchise </span></NavLink>
                      </li>
                    </> :
                    null
                  }
                  
                  {/* Referral */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/referral">
                      <h4><FcIcons.FcMoneyTransfer /></h4>
                      <span>Referral</span>
                    </NavLink>
                  </li>
                  
                  {/* Details */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/details">
                      <h4><FcIcons.FcBusinessContact /></h4>
                      <span>Details</span>
                    </NavLink>
                  </li>

                  {/* Admin Signup */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link active text-white" to="/adminsignup">
                      <h4><FcIcons.FcPortraitMode /></h4>
                      <span>Admin Signup</span>
                    </NavLink>
                  </li>

                  {/* Change Theme */}
                  <li className="nav-text" onClick={changeTheme}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcRating /></h4>
                      <span>Change Theme</span>
                    </NavLink>
                  </li>

                  {/* Logout */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link active text-white" to="/" onClick={logout} >
                      &nbsp;<FiIcons.FiLogOut />
                      <span>Logout</span>
                    </NavLink>
                  </li>

                </ul>:
                null
            }

            {
              authstd ?
                <ul className="navbar-nav">
                  
                  {/* Welcome */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link active text-white" to="/studenthome">
                      <h4><FcIcons.FcBusinessman /></h4>
                      <span>Welcome {JSON.parse(authstd).name}</span>
                    </NavLink>
                  </li>

                  {/* Dashboard */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/studenthome">
                      <h4><FcIcons.FcBarChart /></h4>
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                  
                  {/* Fees */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/fees">
                      <h4><FcIcons.FcCurrencyExchange /></h4>
                      <span>Fee Structure</span>
                    </NavLink>
                  </li>
                  
                  {/* Add Detail */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link text-white" to="/adddetail">
                      <h4><FcIcons.FcBusinessContact /></h4>
                      <span>Add Detail</span>
                    </NavLink>
                  </li>

                  {/* Change Theme */}
                  <li className="nav-text" onClick={changeTheme}>
                    <NavLink className="nav-link text-white" to="#">
                      <h4><FcIcons.FcRating /></h4>
                      <span>Change Theme</span>
                    </NavLink>
                  </li>

                  {/* Logout */}
                  <li className="nav-text" onClick={showSidebar}>
                    <NavLink className="nav-link active text-white" to="/" onClick={logout} >
                      &nbsp;<FiIcons.FiLogOut />
                      <span>Logout</span>
                    </NavLink>
                  </li>
                  
                </ul>:
                null
            }

          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;