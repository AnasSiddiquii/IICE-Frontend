import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddSession = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [session,setSession] = useState({ start: '', end: '' })
  
  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setSession({ ...session, [name]: value })
  }

  const submit = async () => {
    setDisabled(true)
    const { start, end } = session
    
    let result = await fetch('https://api.iice.askfsd.com/addsession',{
      method:'post',
      body:JSON.stringify({ start, end }),
      headers:{'Content-Type':'application/json'}
    })
    result = await result.json()
    
    if(result.message){
      alert(result.message)
      navigate('/sessions')
    }
    else{
      setDisabled(false)
      alert(result.error)
    }
  }


  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Session</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Session Start" name="start"  
          value={session.start} onChange={handleInputs} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Session End" name="end"  
          value={session.end} onChange={handleInputs} />
        </div>
      </div>
      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddSession
