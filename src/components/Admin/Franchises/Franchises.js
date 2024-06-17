import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Franchises = () => {
  
  const [franchise,setFranchise] = useState([])
  
  useEffect(()=>{
    getFranchise()
    // eslint-disable-next-line 
  },[])
  
  // Get Data
  const getFranchise = async () => {
    let result = await fetch('https://api.iice.askfsd.com/franchises')
    result = await result.json()
    if(result){
      setFranchise(result)
    }
  }
  
  // console.log(franchise.map((i)=>(i.level).split(' ').length))
  
  // Delete Data
  const remove = async (id) => {
    let result = await fetch(`https://api.iice.askfsd.com/deletefranchise/${id}`,{
      method:'delete'
    })
    result = await result.json()
    if(result){
      getFranchise()
    }
  }
  
  // Search Data
  const search = async(e) => {
    const key = e.target.value
    if(key){
      let result = await fetch(`https://api.iice.askfsd.com/searchfranchise/${key}`)
      result = await result.json()
      if(result){
        setFranchise(result)
      }
    }
    else{
      getFranchise()
    }
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <h2 className='text-primary col-sm-4 mt-4'>Franchises</h2>
        <div className='col-sm-4'>
        <input type="text" className="form-control mt-4" placeholder="Search....." onChange={search} />
        </div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='col-1'>S&nbsp;no.</th>
              <th className='col-1'>Full Name</th>
              <th className='col-1'>Centre Name</th>
              <th className='col-1'>Centre Type</th>
              <th className='col-1'>Email Address</th>
              <th className='col-1'>Full Address</th>
              <th className='col-1'>Bank Account Detail</th>
              <th className='col-1'>Contact Number</th>
              <th className='col-1'>Alternate Number</th>
              <th className='col-1'>ID Proof</th>
              {/* <th className='col-1'>Stored ID</th> */}
              <th className='col-1'>Edit</th>
              <th className='col-1'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              franchise.length>0?
              franchise.map((i,index)=>(
                <tr key={i._id}>
                  <td>{index+1}</td>
                  <td>{i.fname}</td>
                  <td>{i.cname}</td>
                  <td>{i.ctype}</td>
                  <td>{i.email}</td>
                  <td>{i.address}</td>
                  <td>{i.account}</td>
                  <td>{i.contact}</td>
                  <td>{i.altContact}</td>
                  <td>{i.idProof}</td>
                  {/* <td>{i.level}</td> */}
                  <td><Link to={'/updatefranchise/'+i._id}><button className='btn btn-info'>&nbsp;Edit&nbsp;</button></Link></td>
                  <td><button className='btn btn-danger' onClick={()=>{remove(i._id)}}>Remove</button></td>
                </tr>
              )):
              (
                <tr>
                  <td colSpan={12}><h4 className='text-danger'>No Data Found</h4></td>
                </tr>
              )
            }
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Franchises