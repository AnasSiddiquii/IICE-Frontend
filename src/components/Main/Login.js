import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem('admin')
    if (auth)(
      navigate('/adminhome')
    )
    const authstd = localStorage.getItem('student')
    if (authstd)(
      navigate('/studenthome')
    )
    // eslint-disable-next-line 
  },[])

  const [disabled,setDisabled] = useState(false)
  const [login,setLogin] = useState({ email: '',password: '' })
  
  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setLogin({ ...login, [name]: value })
  }
  
  const submit = async () => {
    setDisabled(true)
    const { email, password } = login

    let result = await fetch('https://api.iice.askfsd.com/std',{
      method:'post',
      body:JSON.stringify({ email, password }),
      headers:{'Content-Type':'application/json'}
    })
    result = await result.json()
    
    if(result.post==='student'){
      localStorage.setItem('student',JSON.stringify({ _id:result._id, name:result.fname, level:result.level }))
      alert('Login Successful')
      navigate('/studenthome')
    }
    else{
      setDisabled(false)
      alert(result.error)
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Login</h2>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="email" className="form-control" autoComplete='off' placeholder="Enter Email Address" name="email"  
          value={login.email} onChange={handleInputs} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="password" className="form-control" autoComplete='off' placeholder="Enter Password" name="password"  
          value={login.password} onChange={handleInputs} />
        </div>
      </div>

      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default Login
