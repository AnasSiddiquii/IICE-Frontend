import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Universities = () => {

  const [university,setUniversity] = useState([])

  useEffect(()=>{
    getUniversity()
    // eslint-disable-next-line 
  },[])

  // Get Data
  const getUniversity = async () => {
    let result = await fetch('https://api.iice.askfsd.com/universities')
    result = await result.json()
    if(result){
      setUniversity(result)
    }
  }
  
  // Delete Data
  const remove = async (id) => {
    let result = await fetch(`https://api.iice.askfsd.com/deleteuniversity/${id}`,{
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
      let result = await fetch(`https://api.iice.askfsd.com/searchuniversity/${key}`)
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
        <h2 className='text-primary col-sm-4 mt-4'>Universities</h2>
        <div className='col-sm-4'>
        <input type="text" className="form-control mt-4" placeholder="Search....." onChange={search} />
        </div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='col-1'>S&nbsp;no.</th>
              <th className='col-4'>Name</th>
              <th className='col-1'>Logo</th>
              <th className='col-4'>State</th>
              <th className='col-1'>Edit</th>
              <th className='col-1'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              university.length>0?
              university.map((i,index)=>(
                <tr key={i._id}>
                  <td className='p-4'>{index+1}</td>
                  <td className='p-4'>{i.name}</td>
                  <td>
                    <img src={`https://api.iice.askfsd.com/logos/${i.logo}`} className='border rounded' height='70' width='70' alt='no img' />
                  </td>
                  <td className='p-4'>{i.state}</td>
                  <td className='p-4'><Link to={'/updateuniversity/'+i._id}><button className='btn btn-info'>&nbsp;Edit&nbsp;</button></Link></td>
                  <td className='p-4'><button className='btn btn-danger' onClick={()=>{remove(i._id)}}>Remove</button></td>
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

export default Universities