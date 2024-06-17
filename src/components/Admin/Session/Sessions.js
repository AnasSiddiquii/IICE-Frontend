import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Sessions = () => {

  const [session,setSession] = useState([])

  useEffect(()=>{
    getSession()
    // eslint-disable-next-line 
  },[])

  // Get Data
  const getSession = async () => {
    let result = await fetch('https://api.iice.askfsd.com/sessions')
    result = await result.json()
    if(result){
      setSession(result)
    }
  }
  
  // Delete Data
  const remove = async (id) => {
    let result = await fetch(`https://api.iice.askfsd.com/deletesession/${id}`,{
      method:'delete'
    })
    result = await result.json()
    if(result){
      getSession()
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'></div>
        <h2 className='text-primary col-4 mt-4'>Sessions</h2>
        <div className='col-3'></div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='col-1'>S&nbsp;no.</th>
              <th className='col-3'>Year</th>
              <th className='col-1'>Edit</th>
              <th className='col-1'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              session.length>0?
              session.map((i,index)=>(
                <tr key={i._id}>
                  <td>{index+1}</td>
                  <td>{i.start} to {i.end}</td>
                  <td><Link to={'/updatesession/'+i._id}><button className='btn btn-info'>&nbsp;Edit&nbsp;</button></Link></td>
                  <td><button className='btn btn-danger' onClick={()=>{remove(i._id)}}>Remove</button></td>
                </tr>
              )):
              (
                <tr>
                  <td colSpan={4}><h4 className='text-danger'>No Data Found</h4></td>
                </tr>
              )
            }
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Sessions