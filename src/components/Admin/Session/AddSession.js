import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddSession = () => {

  let [start,setStart] = useState('')
  let [end,setEnd] = useState('')
  const navigate = useNavigate()

  // Add Data
  const submit = async () => {
    if(start && end){
        let result = await fetch('https://the.iice.foundation/sessions',{
          method:'post',
          body:JSON.stringify({start,end}),
          headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result._id){
          alert('session already exists')
        }
        else{
          let result = await fetch('https://the.iice.foundation/addsession',{
          method:'post',
          body:JSON.stringify({start,end}),
          headers:{'Content-Type':'application/json'}
          })
          result = await result.json()
          if(result){
            navigate('/sessions')
          }
        }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Session</h2>
      
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

export default AddSession
