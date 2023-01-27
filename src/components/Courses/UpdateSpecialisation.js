import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateSpecialisation = () => {

  const [cname,setCname] = useState('')
  const [fname,setFname] = useState('')
  const [sname,setSname] = useState('')
  const [price,setPrice] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getspecialisation()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getspecialisation = async () => {
    let result = await fetch(`http://localhost:5000/updatespecialisation/${params.id}`)
    result = await result.json()
    setCname(result.cname)
    setFname(result.fname)
    setSname(result.sname)
    setPrice(result.price)
  }

  // Update Data
  const submit = async () => {
    if(cname && fname && sname && price){
      let result = await fetch(`http://localhost:5000/updatespecialisation/${params.id}`,{
        method:'put',
        body:JSON.stringify({cname,fname,sname,price}),
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
    <div className='container'>
      <h2 className='text-primary mt-4'>Update Specialisation</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled 
          value={cname} />
        </div>
      </div>

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
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" placeholder="Enter Price" 
          value={price} onChange={(e)=>setPrice(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
    )
}

export default UpdateSpecialisation
