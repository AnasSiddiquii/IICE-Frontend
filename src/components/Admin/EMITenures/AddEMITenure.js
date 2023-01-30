import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEMITenure = () => {

  const [emiTenure,setEMITenure] = useState('')
  const navigate = useNavigate()

  // Add Data
  const submit = async () => {
    if(emiTenure){
      if(emiTenure>0 && emiTenure<100){
        let result = await fetch('http://localhost:5000/emitenures',{
          method:'post',
          body:JSON.stringify({month:emiTenure}),
          headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result._id){
          alert('tenure already exists')
        }
        else{
          let result = await fetch('http://localhost:5000/addemitenure',{
          method:'post',
          body:JSON.stringify({month:emiTenure}),
          headers:{'Content-Type':'application/json'}
          })
          result = await result.json()
          if(result){
            navigate('/emitenures')
          }
        }
      }
      else{
        alert('invalid input')
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add EMI Tenure</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center" placeholder="Enter EMI Tenure in Months" 
          value={emiTenure} onChange={(e)=>setEMITenure(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddEMITenure
