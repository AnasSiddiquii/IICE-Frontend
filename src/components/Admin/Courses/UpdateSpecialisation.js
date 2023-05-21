import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateSpecialisation = () => {

  const [fname,setFname] = useState('')
  const [sname,setSname] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getspecialisation()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getspecialisation = async () => {
    let result = await fetch(`https://the.iice.foundation/updatespecialisation/${params.id}`)
    result = await result.json()
    setFname(result.fname)
    setSname(result.sname)
  }

  // Update Data
  const submit = async () => {
    if(fname && sname){
      let result = await fetch(`https://the.iice.foundation/updatespecialisation/${params.id}`,{
        method:'put',
        body:JSON.stringify({fname,sname}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result){
        navigate('/specialisations')
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Update Specialisation</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter Specialisation FullName" 
          value={fname} onChange={(e)=>setFname(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter Specialisation ShortName" 
          value={sname} onChange={(e)=>setSname(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
    )
}

export default UpdateSpecialisation
