import './App.css';
import React, { useState } from 'react'
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'

import Protected from './components/Private/Protected'
import Protectedstd from './components/Private/Protectedstd'

import BootNav from './components/Nav/BootNav'
import Navbar from './components/Nav/Navbar'

import AdminLogin from './components/Main/AdminLogin'

import Home from './components/Main/Home'
import Login from './components/Main/Login'

import StudentHome from './components/Student/StudentHome'
import Fees from './components/Student/Fees'
import AddDetail from './components/Student/AddDetail'
import Payment from './components/Student/Payment'

import AdminHome from './components/Admin/Others/AdminHome'
import Referral from './components/Admin/Others/Referral'
import Details from './components/Admin/Others/Details'
import AdminSignup from './components/Admin/Others/AdminSignup'

import Universities from './components/Admin/Universities/Universities'
import AddUniversity from './components/Admin/Universities/AddUniversity'
import UpdateUniversity from './components/Admin/Universities/UpdateUniversity'

import Courses from './components/Admin/Courses/Courses'
import AddCourse from './components/Admin/Courses/AddCourse'
import UpdateCourse from './components/Admin/Courses/UpdateCourse'
import Specialisations from './components/Admin/Courses/Specialisations'
import AddSpecialisation from './components/Admin/Courses/AddSpecialisation'
import UpdateSpecialisation from './components/Admin/Courses/UpdateSpecialisation'

import Sessions from './components/Admin/Session/Sessions'
import AddSession from './components/Admin/Session/AddSession'
import UpdateSession from './components/Admin/Session/UpdateSession'

import FeeStructure from './components/Admin/FeeStructure/FeeStructure'
import AddFeeStructure from './components/Admin/FeeStructure/AddFeeStructure'
import UpdateFeeStructure from './components/Admin/FeeStructure/UpdateFeeStructure'

import EMITenures from './components/Admin/EMITenures/EMITenures'
import AddEMITenure from './components/Admin/EMITenures/AddEMITenure'
import UpdateEMITenure from './components/Admin/EMITenures/UpdateEMITenure'

import Students from './components/Admin/Students/Students'
import AddStudent from './components/Admin/Students/AddStudent'
import UpdateStudent from './components/Admin/Students/UpdateStudent'

import Franchises from './components/Admin/Franchises/Franchises'
import AddFranchise from './components/Admin/Franchises/AddFranchise'
import UpdateFranchise from './components/Admin/Franchises/UpdateFranchise'

const App = () => {

  // change theme
  const [nav,setNav] = useState(true)

  const theme1 = (theme1) => {
    setNav(theme1)
  }
  const theme2 = (theme2) => {
    setNav(theme2)
  }

  return (
    <HashRouter>
      {nav ? <Navbar theme1={theme1} /> : <BootNav theme2={theme2}/>}
      <div className="center">
        <Routes>
        
          <Route element={<Protected />}>

            <Route path='/adminhome' element={<AdminHome />} />

            <Route path='/universities' element={<Universities />} />
            <Route path='/adduniversity' element={<AddUniversity />} />
            <Route path='/updateuniversity/:id' element={<UpdateUniversity />} />

            <Route path='/courses' element={<Courses />} />
            <Route path='/addcourse' element={<AddCourse />} />
            <Route path='/updatecourse/:id' element={<UpdateCourse />} />
            <Route path='/specialisations' element={<Specialisations />} />
            <Route path='/addspecialisation' element={<AddSpecialisation />} />
            <Route path='/updatespecialisation/:id' element={<UpdateSpecialisation />} />
            
            <Route path='/sessions' element={<Sessions />} />
            <Route path='/addsession' element={<AddSession />} />
            <Route path='/updatesession/:id' element={<UpdateSession />} />
            
            <Route path='/feestructure' element={<FeeStructure />} />
            <Route path='/addfeestructure' element={<AddFeeStructure />} />
            <Route path='/updatefeestructure/:id' element={<UpdateFeeStructure />} />

            <Route path='/emitenures' element={<EMITenures />} />
            <Route path='/addemitenure' element={<AddEMITenure />} />
            <Route path='/updateemitenure/:id' element={<UpdateEMITenure />} />
            
            <Route path='/students' element={<Students />} />
            <Route path='/addstudent' element={<AddStudent />} />
            <Route path='/updatestudent/:id' element={<UpdateStudent />} />
            
            <Route path='/franchises' element={<Franchises />} />
            <Route path='/addfranchise' element={<AddFranchise />} />
            <Route path='/updatefranchise/:id' element={<UpdateFranchise />} />

            <Route path='/referral' element={<Referral />} />
            <Route path='/details' element={<Details />} />
            <Route path='/adminsignup' element={<AdminSignup />} />
          
          </Route>



          <Route element={<Protectedstd />}>

            <Route path='/studenthome' element={<StudentHome />} />
            <Route path='/fees' element={<Fees />} />
            <Route path='/adddetail' element={<AddDetail />} />
            <Route path='/payment' element={<Payment />} />
        
          </Route>



          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path="/*" element={<Navigate to='/' />} />
          
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
