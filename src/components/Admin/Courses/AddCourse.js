import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCourse = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [course,setCourse] = useState({ fname: '', sname: '' })
  
  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setCourse({ ...course, [name]: value })
  }

  const submit = async () => {
    setDisabled(true)
    const { fname, sname } = course
    
    let result = await fetch('https://api.iice.askfsd.com/addcourse',{
      method:'post',
      body:JSON.stringify({ fname, sname }),
      headers:{'Content-Type':'application/json'}
    })
    result = await result.json()
    
    if(result.message){
      alert(result.message)
      navigate('/courses')
    }
    else{
      setDisabled(false)
      alert(result.error)
    }
  }


  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Course</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Course FullName" name="fname"  
          value={course.fname} onChange={handleInputs} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Course ShortName" name="sname"  
          value={course.sname} onChange={handleInputs} />
        </div>
      </div>
      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddCourse
