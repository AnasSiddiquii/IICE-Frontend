import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddFeeStructure = () => {

  const [university,setUniversity] = useState([])
  const [course,setCourse] = useState([])
  const [specialisation,setSpecialisation] = useState([])
  const [uname,setUname] = useState('')
  const [cname,setCname] = useState('')
  const [sname,setSname] = useState('')
  const [month1,setMonth1] = useState('')
  const [month3,setMonth3] = useState('')
  const [month6,setMonth6] = useState('')
  const [month9,setMonth9] = useState('')
  const [month12,setMonth12] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    getUniversity()
    getCourse()
    getSpecialisation()
  },[])

   // Get University Data
   const getUniversity = async () => {
    let result = await fetch('http://localhost:5000/universities')
    result = await result.json()
    if(result){
      setUniversity(result)
    }
  }
  
  // Get Course Data
  const getCourse = async () => {
    let result = await fetch('http://localhost:5000/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }

  // Get Specialisation Data
  const getSpecialisation = async () => {
    let result = await fetch('http://localhost:5000/specialisations')
    result = await result.json()
    if(result){
      setSpecialisation(result)
    }
  }

  const submit = async () => {

    if(uname && cname && sname && month1 && month3 && month6 && month9 && month12){
      let result = await fetch('http://localhost:5000/feestructure',{
        method:'post',
        body:JSON.stringify({uname, cname, sname}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result._id){
        alert('university already exists')
      }
      else{
        let result = await fetch('http://localhost:5000/addfeestructure',{
        method:'post',
        body:JSON.stringify({uname, cname, sname, month1, month3, month6, month9, month12}),
        headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/feestructure')
        }
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Fee Structure</h2>
      
      <div className="row justify-content-evenly text-white">
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>01 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 01 Month Fee'
          value={month1} onChange={(e)=>setMonth1(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>03 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 03 Month Fee'
          value={month3} onChange={(e)=>setMonth3(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>06 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 06 Month Fee'
          value={month6} onChange={(e)=>setMonth6(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>09 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 09 Month Fee'
          value={month9} onChange={(e)=>setMonth9(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>12 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 12 Month Fee'
          value={month12} onChange={(e)=>setMonth12(e.target.value)} />
        </div>
      </div>

      {/* Select University */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setUname(e.target.value)}>
            <option>Select University</option>
            {
              university.length>0 ?
              university.map((i)=>(
                <option key={i._id}>{i.name} ({i.state})</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>
      </div>

      {/* Select Course */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setCname(e.target.value)}>
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
      
      {/* Select Specialisation */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setSname(e.target.value)}>
            <option>Select Specialisation</option>
            {
              specialisation.length>0?
              specialisation.map((i)=>(
                <option key={i._id}>{i.sname}</option>
                )) :
                <option>No Data Found</option>
                }
          </select>  
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddFeeStructure
