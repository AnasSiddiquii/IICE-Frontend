import './App.css';
import React, { useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import Protected from './components/Protected';
import BootNav from './components/BootNav'
import Navbar from './components/Navbar'

import Home from './components/Home'
import Details from './components/Details';
import AddDetail from './components/AddDetail';
import Payment from './components/Payment';

import AdminLogin from './components/Admin/AdminLogin'
import AdminHome from './components/Admin/AdminHome';
import AdminSignup from './components/Admin/AdminSignup'

import Universities from './components/Universities/Universities'
import AddUniversity from './components/Universities/AddUniversity'
import UpdateUniversity from './components/Universities/UpdateUniversity'

import Courses from './components/Courses/Courses'
import AddCourse from './components/Courses/AddCourse'
import UpdateCourse from './components/Courses/UpdateCourse'
import Specialisations from './components/Courses/Specialisations'
import AddSpecialisation from './components/Courses/AddSpecialisation'
import UpdateSpecialisation from './components/Courses/UpdateSpecialisation'

import Sessions from './components/Session/Sessions'
import AddSession from './components/Session/AddSession'
import UpdateSession from './components/Session/UpdateSession'

import FeeStructure from './components/FeeStructure/FeeStructure'
import AddFeeStructure from './components/FeeStructure/AddFeeStructure'
import UpdateFeeStructure from './components/FeeStructure/UpdateFeeStructure'

import EMITenures from './components/EMITenures/EMITenures'
import AddEMITenure from './components/EMITenures/AddEMITenure'
import UpdateEMITenure from './components/EMITenures/UpdateEMITenure'

import Students from './components/Students/Students'
import AddStudent from './components/Students/AddStudent'
import UpdateStudent from './components/Students/UpdateStudent'

import Franchises from './components/Franchises/Franchises'
import AddFranchise from './components/Franchises/AddFranchise'
import UpdateFranchise from './components/Franchises/UpdateFranchise'

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
    <BrowserRouter>
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

            <Route path='/details' element={<Details />} />
            
          <Route path='/adminsignup' element={<AdminSignup />} />
          
          </Route>

          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/adddetail' element={<AddDetail />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="/*" element={<Navigate to='/' />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
