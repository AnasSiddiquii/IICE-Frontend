import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEMITenure = () => {

  const [emiTenure,setEMITenure] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getEMITenure()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getEMITenure = async () => {
    let result = await fetch(`https://the.iice.foundation/updateemitenure/${params.id}`)
    result = await result.json()
    setEMITenure(result.month)
  }

  // update Data
  const submit = async () => {
    if(emiTenure){
      if(emiTenure>0 && emiTenure<100){
        let result = await fetch(`https://the.iice.foundation/updateemitenure/${params.id}`,{
          method:'put',
          body:JSON.stringify({month:emiTenure}),
          headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/emitenures')
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
      <h2 className='text-primary mt-4'>Update EMI Tenure</h2>

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

export default UpdateEMITenure
