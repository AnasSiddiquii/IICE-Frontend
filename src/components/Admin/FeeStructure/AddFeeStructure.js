import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddFeeStructure = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [feeStructure,setFeeStructure] = useState({ month1: '', month3: '', month6: '', month9: '', month12: '', uname: '', cname: '', sname: '' })
  
  const [university,setUniversity] = useState([])
  const [course,setCourse] = useState([])
  const [specialisation,setSpecialisation] = useState([])
  
  useEffect(()=>{
    getUniversity()
    getCourse()
    getSpecialisation()
  },[])

  // Get University Data
  const getUniversity = async () => {
    let result = await fetch('https://the.iice.foundation/universities')
    result = await result.json()
    if(result){
      setUniversity(result)
    }
  }
  
  // Get Course Data
  const getCourse = async () => {
    let result = await fetch('https://the.iice.foundation/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }

  // Get Specialisation Data
  const getSpecialisation = async () => {
    let result = await fetch('https://the.iice.foundation/specialisations')
    result = await result.json()
    if(result){
      setSpecialisation(result)
    }
  }

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setFeeStructure({ ...feeStructure, [name]: value })
  }

  const submit = async () => {
    setDisabled(true)
    const { month1, month3, month6, month9, month12, uname, cname, sname } = feeStructure
    
    let result = await fetch('https://the.iice.foundation/addfeestructure',{
      method:'post',
      body:JSON.stringify({ month1, month3, month6, month9, month12, uname, cname, sname }),
      headers:{'Content-Type':'application/json'}
    })
    result = await result.json()
    
    if(result.message){
      alert(result.message)
      navigate('/feestructure')
    }
    else{
      setDisabled(false)
      alert(result.error)
    }
  }
   
  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Fee Structure</h2>
      
      <div className="row justify-content-evenly text-white">
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>01 Month</h5>
          <input type="text" className="form-control text-center mt-2" autoComplete='off' placeholder="Enter 01 Month Fee" name="month1"  
          value={feeStructure.month1} onChange={handleInputs} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>03 Month</h5>
          <input type="text" className="form-control text-center mt-2" autoComplete='off' placeholder="Enter 03 Month Fee" name="month3"  
          value={feeStructure.month3} onChange={handleInputs} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>06 Month</h5>
          <input type="text" className="form-control text-center mt-2" autoComplete='off' placeholder="Enter 06 Month Fee" name="month6"  
          value={feeStructure.month6} onChange={handleInputs} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>09 Month</h5>
          <input type="text" className="form-control text-center mt-2" autoComplete='off' placeholder="Enter 09 Month Fee" name="month9"  
          value={feeStructure.month9} onChange={handleInputs} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>12 Month</h5>
          <input type="text" className="form-control text-center mt-2" autoComplete='off' placeholder="Enter 12 Month Fee" name="month12"  
          value={feeStructure.month12} onChange={handleInputs} />
        </div>
      </div>

      {/* Select University */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" name="uname" onChange={handleInputs}>
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
          <select className="form-select mt-4" name="cname" onChange={handleInputs}>
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
          <select className="form-select mt-4" name="sname" onChange={handleInputs}>
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
      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddFeeStructure
