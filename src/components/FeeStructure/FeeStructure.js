import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const FeeStructure = () => {

  const [university,setUniversity] = useState([])

  useEffect(()=>{
    getUniversity()
    // eslint-disable-next-line 
  },[])

  // Get Data
  const getUniversity = async () => {
    let result = await fetch('http://localhost:5000/universities1')
    result = await result.json()
    if(result){
      setUniversity(result)
    }
  }
  
  // Delete Data
  const remove = async (id) => {
    let result = await fetch(`http://localhost:5000/deleteuniversity1/${id}`,{
      method:'delete'
    })
    result = await result.json()
    if(result){
      getUniversity()
    }
  }
  
  // Search Data
  const search = async(e) => {
    const key = e.target.value
    if(key){
      let result = await fetch(`http://localhost:5000/searchuniversity1/${key}`)
      result = await result.json()
      if(result){
        setUniversity(result)
      }
    }
    else{
      getUniversity()
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <h2 className='text-primary col-sm-4 mt-4'>Fee Structure</h2>
        <div className='col-sm-4'>
        <input type="text" className="form-control mt-4" placeholder="Search....." onChange={search} />
        </div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='col-1'>S&nbsp;no.</th>
              <th className='col-2'>Name</th>
              <th className='col-2'>Logo</th>
              <th className='col-2'>State</th>
              <th className='col-1'>Edit</th>
              <th className='col-1'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              university.length>0?
              university.map((i,index)=>(
                <tr key={i._id}>
                  <td>{index+1}</td>
                  <td>{i.name}</td>
                  <td>{i.logo}</td>
                  <td>{i.state}</td>
                  <td><Link to={'/updateuniversity/'+i._id}><button className='btn btn-info'>&nbsp;Edit&nbsp;</button></Link></td>
                  <td><button className='btn btn-danger' onClick={()=>{remove(i._id)}}>Remove</button></td>
                </tr>
              )):
              (
                <tr>
                  <td colSpan={6}><h4 className='text-danger'>No Data Found</h4></td>
                </tr>
              )
            }
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FeeStructure