import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddFranchise = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [franchise,setFranchise] = useState({ fname: '', cname: '', ctype: '', email: '', address: '', account: '', contact: '', altContact: '', idProof: '', level: '' })

  const [referrer,setReferrer] = useState([])

  useEffect(()=>{
    getFranchise()
    // eslint-disable-next-line 
  },[])

  // Get Franchise Data
  const getFranchise = async () => {
    let result = await fetch('https://api.iice.askfsd.com/franchises')
    result = await result.json()
    if(result){
      setReferrer(result)
    }
  }

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setFranchise({ ...franchise, [name]: value })
  }

  const submit = async () => {
    setDisabled(true)
    let { fname, cname, ctype, email, address, account, contact, altContact, idProof, level } = franchise

    // logic to store ids
    for (let i = 0; i < referrer.length; i++){
      const frnName = referrer.map((i)=>(i.fname))
      const frnID = referrer.map((i)=>(i._id))
      const frnLevel = referrer.map((i)=>(i.level))
      
      const match = frnName[i]===level
      if(match){
        level=frnID[i]+' '+frnLevel[i]
        level=level.trim()
      }
    }
    
    // logic for blank
    if(level==='No Data Found' || level==='Select Referrer'){
      level=''
    }
    
    // logic for 5 level range  
    if(level.split(' ').length===6){
      const first = level.split(' ')[5]
      level=(level.replace(first,'').trim())
    }

    let result = await fetch('https://api.iice.askfsd.com/addfranchise',{
      method:'post',
      body:JSON.stringify({ fname, cname, ctype, email, address, account, contact, altContact, idProof, level }),
      headers:{'Content-Type':'application/json'}
    })
    result = await result.json()
    
    if(result.message){
      alert(result.message)
      navigate('/franchises')
    }
    else{
      setDisabled(false)
      alert(result.error)
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Franchise</h2>


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Full Name" name="fname"  
          value={franchise.fname} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Centre Name" name="cname"  
          value={franchise.cname} onChange={handleInputs} />
        </div>
      </div>


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Centre Type" name="ctype"  
          value={franchise.ctype} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="email" className="form-control" autoComplete='off' placeholder="Enter Email Address" name="email"  
          value={franchise.email} onChange={handleInputs} />
        </div>
      </div>      


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Full Address" name="address"  
          value={franchise.address} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Bank Account Detail" name="account"  
          value={franchise.account} onChange={handleInputs} />
        </div>
      </div>


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Contact Number" name="contact"  
          value={franchise.contact} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Alternate Number" name="altContact"  
          value={franchise.altContact} onChange={handleInputs} />
        </div>
      </div>


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="file" className="form-control" accept='application/pdf' name="idProof" value={franchise.idProof} onChange={handleInputs} />
        </div>
        
        <div className="col-10 col-md-5">
          <select className="form-select mt-4" name="level" onChange={handleInputs}>
            <option>Select Referrer</option>
            {
              referrer.length>0 ?
              referrer.map((i)=>(
                <option key={i._id}>{i.fname}</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>
      </div>

      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddFranchise