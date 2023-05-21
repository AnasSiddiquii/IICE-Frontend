import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateSession = () => {

  let [start,setStart] = useState('')
  let [end,setEnd] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getSession()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getSession = async () => {
    let result = await fetch(`https://the.iice.foundation/updatesession/${params.id}`)
    result = await result.json()
    setStart(result.start)
    setEnd(result.end)
  }

  // update Data
  const submit = async () => {
    if(start && end){
        let result = await fetch(`https://the.iice.foundation/updatesession/${params.id}`,{
          method:'put',
          body:JSON.stringify({start,end}),
          headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/sessions')
        }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Update Session</h2>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center" placeholder="Enter Session Start" 
          value={start} onChange={(e)=>setStart(e.target.value)} />
        </div>
      </div>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center" placeholder="Enter Session End" 
          value={end} onChange={(e)=>setEnd(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default UpdateSession
