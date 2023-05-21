import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Specialisations = () => {

  const [specialisation,setSpecialisation] = useState([])

  useEffect(()=>{
    getSpecialisation()
    // eslint-disable-next-line 
  },[])
  
  // Get Data
  const getSpecialisation = async () => {
    let result = await fetch('https://the.iice.foundation/specialisations')
    result = await result.json()
    if(result){
      setSpecialisation(result)
    }
  }
  
  // Delete Data
  const remove = async (id) => {
    let result = await fetch(`https://the.iice.foundation/deletespecialisation/${id}`,{
      method:'delete'
    })
    result = await result.json()
    if(result){
      getSpecialisation()
    }
  }
  
  // Search Data
  const search = async(e) => {
    const key = e.target.value
    if(key){
      let result = await fetch(`https://the.iice.foundation/searchspecialisation/${key}`)
      result = await result.json()
      if(result){
        setSpecialisation(result)
      }
    }
    else{
      getSpecialisation()
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'></div>
        <h2 className='text-primary col-4 mt-4'>Specialisations</h2>
        <div className='col-4'>
        <input type="text" className="form-control mt-4" placeholder="Search....." onChange={search} />
        </div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='col-1'>S&nbsp;no.</th>
              <th className='col-2'>Specialisation FullName</th>
              <th className='col-2'>Specialisation ShortName</th>
              <th className='col-1'>Edit</th>
              <th className='col-1'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              specialisation.length>0?
              specialisation.map((i,index)=>(
                <tr key={i._id}>
                  <td>{index+1}</td>
                  <td>{i.fname}</td>
                  <td>{i.sname}</td>
                  <td><Link to={'/updatespecialisation/'+i._id}><button className='btn btn-info'>&nbsp;Edit&nbsp;</button></Link></td>
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

export default Specialisations