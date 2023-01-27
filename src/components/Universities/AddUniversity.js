import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUniversity = () => {

  const [name,setName] = useState('')
  const [logo,setLogo] = useState('')
  const [state,setState] = useState('')
  const navigate = useNavigate()

  const submit = async () => {
    if(name && logo && state){
      let result = await fetch('http://localhost:5000/universities',{
        method:'post',
        body:JSON.stringify({name,state}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result._id){
        alert('university already exists')
      }
      else{
        let result = await fetch('http://localhost:5000/adduniversity',{
        method:'post',
        body:JSON.stringify({name,logo,state}),
        headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/universities')
        }
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container'>
      <h2 className='text-primary mt-4'>Add University</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter University Name" 
          value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="file" className="form-control" value={logo} onChange={(e)=>setLogo(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter University State" 
          value={state} onChange={(e)=>setState(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddUniversity
