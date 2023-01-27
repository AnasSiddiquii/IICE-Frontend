import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSignup = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async () => {
    if (name && email && password){
      let result = await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result._id){
        alert('user already exists')
      }
      else{
        let result = await fetch('http://localhost:5000/signup',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/admin')
        }
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container'>
      <h2 className='text-primary mt-4'>Admin Signup</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Name" 
          value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" 
          value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" 
          value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AdminSignup
