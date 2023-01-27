import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddFranchise = () => {

  const [fname,setFname] = useState('')
  const [cname,setCname] = useState('')
  const [ctype,setCtype] = useState('')
  const [address,setAddress] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const [altContact,setAltContact] = useState('')
  const [idProof,setIDProof] = useState('')
  const [account,setAccount] = useState('')
  let [level,setLevel] = useState('')
  const [franchise,setFranchise] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    getFranchise()
  },[])

  // Get Franchise Data
  const getFranchise = async () => {
    let result = await fetch('http://localhost:5000/franchises')
    result = await result.json()
    if(result){
      setFranchise(result)
    }
  }

  const submit = async () => {
    // logic to store ids
    for (let i = 0; i < franchise.length; i++){
      let frhName = franchise.map((i)=>(i.name))
      let frhID = franchise.map((i)=>(i._id))
      let frhLevel = franchise.map((i)=>(i.level))
      let match = frhName[i]===level
      if(match){
        level=frhID[i]+' '+frhLevel[i]
      }
    }
    
    // logic for admin
    if(level==='No Data Found' || level==='Select Referrer'){
      level=''
    }
    
    // // logic for 5 level range  
    if(level.split(' ').length===6){
      const first = level.split(' ')[5]
      level=(level.replace(first,'').trim())
    }

    if(fname && cname && ctype && address && email && contact && altContact && idProof && account && level && level !== 'Referrer'){
      let result = await fetch('http://localhost:5000/franchises',{
        method:'post',
        body:JSON.stringify({fname, email}),
        // body:JSON.stringify({cname, email}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result._id){
        alert('franchise already exists')
      }
      else{
        let result = await fetch('http://localhost:5000/addfranchise',{
        method:'post',
        body:JSON.stringify({fname, cname, ctype, address, email, contact, altContact, idProof, account, level}),
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
    <div className='container'>
      <h2 className='text-primary mt-4'>Add Franchise</h2>


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
        
        <div className="col-10 col-md-5">
          <select className="form-select mt-4" onChange={(e)=>setLevel(e.target.value)}>
            <option>Select Referrer</option>
            {
              franchise.length>0 ?
              franchise.map((i)=>(
                <option key={i._id}>{i.fname} {i._id} {i.level}</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>
      </div>
      

      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddFranchise