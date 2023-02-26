import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateFeeStructure = () => {

  const [month1,setMonth1] = useState('')
  const [month3,setMonth3] = useState('')
  const [month6,setMonth6] = useState('')
  const [month9,setMonth9] = useState('')
  const [month12,setMonth12] = useState('')
  const [uname,setUname] = useState('')
  const [cname,setCname] = useState('')
  const [sname,setSname] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getFeeStructure()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getFeeStructure = async () => {
    let result = await fetch(`https://the.iice.foundation/updatefeestructure/${params.id}`)
    result = await result.json()
    setMonth1(result.month1)
    setMonth3(result.month3)
    setMonth6(result.month6)
    setMonth9(result.month9)
    setMonth12(result.month12)
    setUname(result.uname)
    setCname(result.cname)
    setSname(result.sname)
  }

  // Update Data
  const submit = async () => {
    if(month1 && month3 && month6 && month9 && month12){
      let result = await fetch(`https://the.iice.foundation/updatefeestructure/${params.id}`,{
        method:'put',
        body:JSON.stringify({month1, month3, month6, month9, month12}),
        headers:{'Content-Type':'application/json'}
        })
      result = await result.json()
      if(result){
        navigate('/feestructure')
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Update Fee Structure</h2>
      
      <div className="row justify-content-evenly text-white">
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>01 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 01 Month Fee'
          value={month1} onChange={(e)=>setMonth1(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>03 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 03 Month Fee'
          value={month3} onChange={(e)=>setMonth3(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>06 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 06 Month Fee'
          value={month6} onChange={(e)=>setMonth6(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>09 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 09 Month Fee'
          value={month9} onChange={(e)=>setMonth9(e.target.value)} />
        </div>
        <div className="col-8 col-md-2 mt-2 p-2 rounded bg-info border">
          <h5>12 Month</h5>
          <input type='text' className='form-control text-center mt-2' placeholder='Enter 12 Month Fee'
          value={month12} onChange={(e)=>setMonth12(e.target.value)} />
        </div>
      </div>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled value={uname} onChange={(e)=>setUname(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled value={cname} onChange={(e)=>setCname(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled value={sname} onChange={(e)=>setSname(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default UpdateFeeStructure
