import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUniversity = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [university,setUniversity] = useState({ name: '', logo: '', state: '' })

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setUniversity({ ...university, [name]: value })
  }

  const submit = async () => {
    setDisabled(true)
    const { name, logo, state } = university
    
    let result = await fetch('https://the.iice.foundation/adduniversity',{
      method:'post',
      body:JSON.stringify({ name, logo, state }),
      headers:{'Content-Type':'application/json'}
    })
    result = await result.json()
    
    if(result.message){
      alert(result.message)
      navigate('/universties')
    }
    else{
      setDisabled(false)
      alert(result.error)
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add University</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter University Name" name="name"  
          value={university.name} onChange={handleInputs} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="file" className="form-control" accept='image/*' name="logo" value={university.logo} onChange={handleInputs} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter University State" name="state"  
          value={university.state} onChange={handleInputs} />
        </div>
      </div>
      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddUniversity
