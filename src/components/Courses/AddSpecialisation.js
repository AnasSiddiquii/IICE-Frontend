import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const AddSpecialisation = () => {

  const [course,setCourse] = useState([])
  const [cname,setCname] = useState('')
  const [fname,setFname] = useState('')
  let [sname,setSname] = useState('')
  const navigate = useNavigate()
  
  
  useEffect(()=>{
    getCourse()
    // eslint-disable-next-line 
  },[])
  
  // Pre-Filled Data
  const getCourse = async () => {
    let result = await fetch('http://localhost:5000/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }

  // Add Data
  const submit = async () => {
    if(fname && sname && cname && cname !=='Select Course' && cname !=='No Data Found' ){
      sname=`${sname} (${cname})`
      let result = await fetch('http://localhost:5000/specialisations',{
        method:'post',
        body:JSON.stringify({fname,sname}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result._id){
        alert('specialisation already exists')
      }
      else{
        let result = await fetch('http://localhost:5000/addspecialisation',{
        method:'post',
        body:JSON.stringify({fname,sname}),
        headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/specialisations')
        }
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Specialisation</h2>
      
      <div className="row justify-content-evenly">
      <div className="col-10 col-md-6 col-lg-4">
        <select className="form-select col-1 mt-4" onChange={(e)=>setCname(e.target.value)}>
          <option>Select Course</option>
          {
            course.length>0 ?
            course.map((i)=>(
              <option key={i._id}>{i.sname}</option>
              )) :
              <option>No Data Found</option>
          }
        </select>  
      </div>
      </div>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter Specialisation FullName" 
          value={fname} onChange={(e)=>setFname(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter Specialisation ShortName" 
          value={sname} onChange={(e)=>setSname(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddSpecialisation
