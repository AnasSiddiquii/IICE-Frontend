import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from 'react-icons/fc';
import { IconContext } from 'react-icons';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = (props) => {

  const auth = localStorage.getItem('user')
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
  // eslint-disable-next-line
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
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars className='bars' onClick={showSidebar} />
          </Link>
          {
            auth ?
            <div className='logout'>
            <button className='btn btn-primary m-3'>
              <Link className="nav-link active text-white" to="/" onClick={logout} >Logout</Link>
            </button>
            </div>:
            null
          }
        </div>
        <h1 className='text-primary col-4 mt-4'>&nbsp;</h1>
        
        <nav className={sidebar ? `nav-menu active ${auth ? 'scroll' : 'no-scroll'}` : 'nav-menu'}>
          <div className='nav-menu-items'>

            <li className='navbar-toggle' onClick={showSidebar}>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {
              auth ?  
                <ul className="navbar-nav">
                  
                  {/* Welcome */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link active text-white" to="/">
                      <h4><FcIcons.FcBusinessman /></h4>
                      <span>Welcome {JSON.parse(auth).name}</span>
                    </Link>
                  </li>

                  {/* Dashboard */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link active text-white" to="/adminhome">
                      <h4><FcIcons.FcBarChart /></h4>
                      <span>Dashboard</span>
                    </Link>
                  </li>

                  {/* Manage Universities */}
                  <li className="nav-text" onClick={showUniversities}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcLibrary /></h4>
                      <span>Manage Universities ﹀</span>
                    </Link>
                  </li>
                  {
                    universities ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/universities"><span> 〉Universities </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/adduniversity"><span> 〉Add University </span></Link>
                      </li>
                    </> :
                    null
                  }
                  
                  {/* Manage Courses */}
                  <li className="nav-text" onClick={showCourses}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcReading /></h4>
                      <span>Manage Courses ﹀</span>
                    </Link>
                  </li>
                  {
                    courses ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/courses"><span> 〉Courses </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/addcourse"><span> 〉Add Course </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/specialisations"><span> 〉Specialisations </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/addspecialisation"><span> 〉Add Specialisation </span></Link>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage Sessions */}
                  <li className="nav-text" onClick={showSessions}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcCalendar /></h4>
                      <span>Manage Sessions ﹀</span>
                    </Link>
                  </li>
                  {
                    sessions ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/sessions"><span> 〉Sessions </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/addsession"><span> 〉Add Session </span></Link>
                      </li>
                    </> :
                    null
                  }
                  
                  {/* Manage Fee Structure */}
                  <li className="nav-text" onClick={showFeeStructure}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcCurrencyExchange /></h4>
                      <span>Manage Fee Structure ﹀</span>
                    </Link>
                  </li>
                  {
                    feeStructure ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/feestructure"><span> 〉Fee Structure </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/addfeestructure"><span> 〉Add Fee Structure </span></Link>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage EMI Tenures */}
                  <li className="nav-text" onClick={showEMITenures}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcOvertime /></h4>
                      <span>Manage EMI Tenures ﹀</span>
                    </Link>
                  </li>
                  {
                    emiTenures ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/emitenures"><span> 〉EMI Tenures </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/addemitenure"><span> 〉Add EMI Tenure </span></Link>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage Students */}
                  <li className="nav-text" onClick={showStudents}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcPortraitMode /></h4>
                      <span>Manage Students ﹀</span>
                    </Link>
                  </li>
                  {
                    students ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/students"><span> 〉Students </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/addstudent"><span> 〉Add Student </span></Link>
                      </li>
                    </> :
                    null
                  }

                  {/* Manage Franchises */}
                  <li className="nav-text" onClick={showFranchises}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcOrganization /></h4>
                      <span>Manage Franchises ﹀</span>
                    </Link>
                  </li>
                  {
                    franchises ?
                    <>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/franchises"><span> 〉Franchises </span></Link>
                      </li>
                      <li className="nav-text" onClick={showSidebar}>
                        <Link className="nav-link text-white" to="/addfranchise"><span> 〉Add Franchise </span></Link>
                      </li>
                    </> :
                    null
                  }
                  
                  {/* Details */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link text-white" to="/details">
                      <h4><FcIcons.FcBusinessContact /></h4>
                      <span>Details</span>
                    </Link>
                  </li>

                  {/* Add Admin */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link active text-white" to="/adminsignup">
                      <h4><FcIcons.FcConferenceCall /></h4>
                      <span>Add Admin</span>
                    </Link>
                  </li>

                  {/* Change Theme */}
                  <li className="nav-text" onClick={changeTheme}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcRating /></h4>
                      <span>Change Theme</span>
                    </Link>
                  </li>

                  {/* Logout */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link active text-white" to="/" onClick={logout} >
                      &nbsp;<FiIcons.FiLogOut />
                      <span>Logout</span>
                    </Link>
                  </li>

                </ul>:

                <ul className="navbar-nav">
                  
                  {/* Dashboard */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link text-white" to="/">
                      <h4><FcIcons.FcBarChart /></h4>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  
                  {/* Add Detail */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link text-white" to="/adddetail">
                      <h4><FcIcons.FcPlus /></h4>
                      <span>Add Detail</span>
                    </Link>
                  </li>

                  {/* Payment */}
                  <li className="nav-text" onClick={showSidebar}>
                    <Link className="nav-link text-white" to="/payment">
                      <h4><FcIcons.FcPlus /></h4>
                      <span>Payment</span>
                    </Link>
                  </li>

                  {/* Change Theme */}
                  <li className="nav-text" onClick={changeTheme}>
                    <Link className="nav-link text-white" to="#">
                      <h4><FcIcons.FcRating /></h4>
                      <span>Change Theme</span>
                    </Link>
                  </li>
                  
                </ul>
            }
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;