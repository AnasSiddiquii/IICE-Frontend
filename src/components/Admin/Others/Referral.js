import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Referral = () => {

  const [l1,setL1] = useState('')
  const [l2,setL2] = useState('')
  const [l3,setL3] = useState('')
  const [l4,setL4] = useState('')
  const [l5,setL5] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    getReferral()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getReferral = async () => {
    let result = await fetch('https://api.iice.askfsd.com/updatereferral/63ef88cebac96b23039fc960')
    result = await result.json()
    setL1(result.l1)
    setL2(result.l2)
    setL3(result.l3)
    setL4(result.l4)
    setL5(result.l5)
  }
  // console.log(l1,l2,l3,l4,l5)


  
  // update Data
  const submit = async () => {
    if(l5 && l4 && l3 && l2 && l1){
      if(l5>0 && l5<100 && l4>0 && l4<100 && l3>0 && l3<100 && l2>0 && l2<100 && l1>0 && l1<100){
        let result = await fetch('https://api.iice.askfsd.com/updatereferral/63d7a776fe06d48fa7bb9b40',{
          method:'put',
          body:JSON.stringify({l5, l4, l3, l2, l1}),
          headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          alert('updated')
          navigate('/')
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
      <h2 className='text-primary mt-4'>Referral</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-8 col-lg-2 mt-3">
          <label>Level-1</label>
          <input type="text" className="form-control text-center mt-1" placeholder="Enter Percentage"
          value={l1} onChange={(e)=>setL1(e.target.value)} />
        </div>

        <div className="col-8 col-lg-2 mt-3">
          <label>Level-2</label>
          <input type="text" className="form-control text-center mt-1" placeholder="Enter Percentage"
          value={l2} onChange={(e)=>setL2(e.target.value)} />
        </div>

        <div className="col-8 col-lg-2 mt-3">
          <label>Level-3</label>
          <input type="text" className="form-control text-center mt-1" placeholder="Enter Percentage"
          value={l3} onChange={(e)=>setL3(e.target.value)} />
        </div>

        <div className="col-8 col-lg-2 mt-3">
          <label>Level-4</label>
          <input type="text" className="form-control text-center mt-1" placeholder="Enter Percentage"
          value={l4} onChange={(e)=>setL4(e.target.value)} />
        </div>

        <div className="col-8 col-lg-2 mt-3">
          <label>Level-5</label>
          <input type="text" className="form-control text-center mt-1" placeholder="Enter Percentage"
          value={l5} onChange={(e)=>setL5(e.target.value)} />
        </div>
      </div>

      {/* <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center" placeholder="Enter Level-2 Percentage"
          value={l2} onChange={(e)=>setL2(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center" placeholder="Enter Level-3 Percentage"
          value={l3} onChange={(e)=>setL3(e.target.value)} />
        </div>
      </div>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center" placeholder="Enter Level-4 Percentage"
          value={l4} onChange={(e)=>setL4(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control text-center" placeholder="Enter Level-5 Percentage"
          value={l5} onChange={(e)=>setL5(e.target.value)} />
        </div>
      </div> */}
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default Referral
