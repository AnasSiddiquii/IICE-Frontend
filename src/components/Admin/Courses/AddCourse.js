import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCourse = () => {

  const [fname,setFname] = useState('')
  const [sname,setSname] = useState('')
  const navigate = useNavigate()

  // Add Data
  const submit = async () => {
    if(fname && sname){
      let result = await fetch('https://new.iice.foundation/courses',{
        method:'post',
        body:JSON.stringify({fname,sname}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result._id){
        alert('course already exists')
      }
      else{
        let result = await fetch('https://new.iice.foundation/addcourse',{
        method:'post',
        body:JSON.stringify({fname,sname}),
        headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/courses')
        }
      }
    }
    else{
      alert('fill all fields')
    }
  }


  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Course</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter Course FullName" 
          value={fname} onChange={(e)=>setFname(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter Course ShortName" 
          value={sname} onChange={(e)=>setSname(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddCourse
