import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUniversity = () => {

  const [name,setName] = useState('')
  const [logo,setLogo] = useState('')
  const [state,setState] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getUniversity()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getUniversity = async () => {
    let result = await fetch(`https://api.iice.askfsd.com/updateuniversity/${params.id}`)
    result = await result.json()
    setName(result.name)
    // setLogo(result.logo)
    setState(result.state)
  }

  // Update Data
  const submit = async () => {
    if(name && state){
      let result
      if(logo){
        result = await fetch(`https://api.iice.askfsd.com/updateuniversity/${params.id}`,{
          method:'put',
          body:JSON.stringify({name,logo,state}),
          headers:{'Content-Type':'application/json'}
          })
        }
      else{
        result = await fetch(`https://api.iice.askfsd.com/updateuniversity/${params.id}`,{
          method:'put',
          body:JSON.stringify({name,state}),
          headers:{'Content-Type':'application/json'}
          })
        }
        result = await result.json()
        if(result){
          navigate('/universities')
        }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Update University</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter University Name" 
          value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
        <input type="file" className="form-control" accept='image/*' value={logo} onChange={(e)=>setLogo(e.target.value)} />
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

export default UpdateUniversity
