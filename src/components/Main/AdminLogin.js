import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if (auth)(
      navigate('/adminhome')
    )
    const authstd = localStorage.getItem('student')
    if (authstd)(
      navigate('/studenthome')
    )
    // eslint-disable-next-line 
  },[])

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async () => {
    if(email && password){
      let result = await fetch('https://the.iice.foundation/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result.post==='admin'){
        localStorage.setItem('user',JSON.stringify(result))
        navigate('/adminhome')
      }
      else{
        alert('invalid email or password')
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Admin Login</h2>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email Address" 
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

export default AdminLogin
