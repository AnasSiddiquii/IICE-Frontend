import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const AddSpecialisation = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [specialisation,setSpecialisation] = useState({ cname: '', fname: '', sname: '' })

  const [course,setCourse] = useState([])
  
  useEffect(()=>{
    getCourse()
    // eslint-disable-next-line 
  },[])
  
  // Get Course Data
  const getCourse = async () => {
    let result = await fetch('https://the.iice.foundation/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setSpecialisation({ ...specialisation, [name]: value })
  }

  const submit = async () => {
    setDisabled(true)
    let { cname, fname, sname } = specialisation
    sname=`${sname} (${cname})`

    if(cname && cname !=='Select Course' && cname !=='No Data Found' ){

      let result = await fetch('https://the.iice.founfation/addspecialisation',{
        method:'post',
        body:JSON.stringify({ fname, sname }),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      
      if(result.message){
        alert(result.message)
        navigate('/specialisations')
      }
      else{
        setDisabled(false)
        alert(result.error)
      }
    }
    else{
      setDisabled(false)
      alert('Please Fill All Fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Specialisation</h2>
      
      <div className="row justify-content-evenly">
      <div className="col-10 col-md-6 col-lg-4">
        <select className="form-select col-1 mt-4" name="cname" onChange={handleInputs}>
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
          <input type="text" className="form-control text-center mt-2" autoComplete='off' placeholder="Enter Specialisation FullName"
          name="fname" value={specialisation.fname} onChange={handleInputs} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center mt-2" autoComplete='off' placeholder="Enter Specialisation ShortName"
          name="sname" value={specialisation.sname} onChange={handleInputs} />
        </div>
      </div>
      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddSpecialisation
