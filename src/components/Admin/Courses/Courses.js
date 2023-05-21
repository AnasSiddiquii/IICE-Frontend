import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Courses = () => {

  const [course,setCourse] = useState([])

  useEffect(()=>{
    getCourse()
    // eslint-disable-next-line 
  },[])

  // Get Data
  const getCourse = async () => {
    let result = await fetch('https://the.iice.foundation/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }
  
  // Delete Data
  const remove = async (id) => {
    let result = await fetch(`https://the.iice.foundation/deletecourse/${id}`,{
      method:'delete'
    })
    result = await result.json()
    if(result){
      getCourse()
    }
  }
  
  // Search Data
  const search = async(e) => {
    const key = e.target.value
    if(key){
      let result = await fetch(`https://the.iice.foundation/searchcourse/${key}`)
      result = await result.json()
      if(result){
        setCourse(result)
      }
    }
    else{
      getCourse()
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'></div>
        <h2 className='text-primary col-4 mt-4'>Courses</h2>
        <div className='col-4'>
        <input type="text" className="form-control mt-4" placeholder="Search....." onChange={search} />
        </div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='col-1'>S&nbsp;no.</th>
              <th className='col-3'>Course FullName</th>
              <th className='col-2'>Course ShortName</th>
              <th className='col-1'>Edit</th>
              <th className='col-1'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              course.length>0?
              course.map((i,index)=>(
                <tr key={i._id}>
                  <td>{index+1}</td>
                  <td>{i.fname}</td>
                  <td>{i.sname}</td>
                  <td><Link to={'/updatecourse/'+i._id}><button className='btn btn-info'>&nbsp;Edit&nbsp;</button></Link></td>
                  <td><button className='btn btn-danger' onClick={()=>{remove(i._id)}}>Remove</button></td>
                </tr>
              )):
              (
                <tr>
                  <td colSpan={5}><h4 className='text-danger'>No Data Found</h4></td>
                </tr>
              )
            }
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Courses