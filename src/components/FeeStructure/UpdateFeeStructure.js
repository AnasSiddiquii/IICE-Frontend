import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateFeeStructure = () => {

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
    let result = await fetch(`http://localhost:5000/updateuniversity1/${params.id}`)
    result = await result.json()
    setName(result.name)
    setLogo(result.logo)
    setState(result.state)
  }

  // Update Data
  const submit = async () => {
    if(name && logo && state){
      let result = await fetch(`http://localhost:5000/updateuniversity1/${params.id}`,{
        method:'put',
        body:JSON.stringify({name,logo,state}),
        headers:{'Content-Type':'application/json'}
        })
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
    <div className='container'>
      <h2 className='text-primary mt-4'>Update Fee Structure</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter University Name" 
          value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter University Logo" 
          value={logo} onChange={(e)=>setLogo(e.target.value)} />
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

export default UpdateFeeStructure
