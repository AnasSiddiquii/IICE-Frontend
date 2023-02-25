import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateFranchise = () => {

  const [fname,setFname] = useState('')
  const [cname,setCname] = useState('')
  const [ctype,setCtype] = useState('')
  const [address,setAddress] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const [altContact,setAltContact] = useState('')
  const [idProof,setIDProof] = useState('')
  const [account,setAccount] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getFranchise()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getFranchise = async () => {
    let result = await fetch(`https://the.iice.foundation/updatefranchise/${params.id}`)
    result = await result.json()
    setFname(result.fname)
    setCname(result.cname)
    setCtype(result.ctype)
    setAddress(result.address)
    setEmail(result.email)
    setContact(result.contact)
    setAltContact(result.altContact)
    // setIDProof(result.idProof)
    setAccount(result.account)
  }

  // Update Data
  const submit = async () => {
    if(fname && cname && ctype && address && email && contact && altContact && account){
      if(idProof){
        let result = await fetch(`https://the.iice.foundation/updatefranchise/${params.id}`,{
          method:'put',
          body:JSON.stringify({fname, cname, ctype, address, email, contact, altContact, idProof, account}),
          headers:{'Content-Type':'application/json'}
          })
        result = await result.json()
        if(result){
          navigate('/franchises')
        }
      }
      else{
        let result = await fetch(`https://the.iice.foundation/updatefranchise/${params.id}`,{
          method:'put',
          body:JSON.stringify({fname, cname, ctype, address, email, contact, altContact, account}),
          headers:{'Content-Type':'application/json'}
          })
        result = await result.json()
        if(result){
          navigate('/franchises')
        }
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Update Franchise</h2>


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Full Name" 
          value={fname} onChange={(e)=>setFname(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Centre Name" 
          value={cname} onChange={(e)=>setCname(e.target.value)} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Centre Type" 
          value={ctype} onChange={(e)=>setCtype(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Full Address" 
          value={address} onChange={(e)=>setAddress(e.target.value)} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Email Address" 
          value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Contact Number" 
          value={contact} onChange={(e)=>setContact(e.target.value)} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Alternate Number" 
          value={altContact} onChange={(e)=>setAltContact(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="file" className="form-control" onChange={(e)=>setIDProof(e.target.value)} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Bank Account Detail" 
          value={account} onChange={(e)=>setAccount(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4"></div> {/* empty */}
      </div>
      

      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default UpdateFranchise
