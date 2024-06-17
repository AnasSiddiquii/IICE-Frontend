import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [student,setStudent] = useState({ fname: '', dob: '', father: '', mother: '', email: '', address: '', contact: '', altContact: '', photo: '', idProof: '', password: '',level: '', post: 'student',  })

  useEffect(()=>{
    getReferrer()
    getFeeStructure()
    getSession()
    getEMITenure()
    // eslint-disable-next-line 
  },[])
  
  const [courseName,setCourseName] = useState('')
  const [specialisationName,setSpecialisationName] = useState('')
  const [universityName,setUniversityName] = useState('')
  // eslint-disable-next-line 
  const [sessionYear,setSessionYear] = useState('')
  
  
  // eslint-disable-next-line 
  const [payment,setPayment] = useState('')
  const [downPayment,setDownPayment] = useState('')
  const [month,setMonth] = useState('')

  const [referrer,setReferrer] = useState([])
  const [feeStructure,setFeeStructure] = useState([])
  const [session,setSession] = useState([])
  const [emiTenure,setEMITenure] = useState([])

  // Get Referrer Data
  const getReferrer = async () => {
    let result = await fetch('https://api.iice.askfsd.com/students')
    result = await result.json()
    if(result){
      setReferrer(result)
    }
  }
    
  // Get University Data
   const getFeeStructure = async () => {
    let result = await fetch('https://api.iice.askfsd.com/feestructure')
    result = await result.json()
    if(result){
      setFeeStructure(result)
    }
  }
  
  // Get Session Data
  const d =  new Date()
  const cm = d.getMonth()
  const cy = d.getFullYear()
  
  const getSession = () => {
    if(cm===0 || cm===1 || cm===2 || cm===3 || cm===4 || cm===5){
      let array = [`July-${cy-1} to June-${cy}`,`Jan-${cy} to Dec-${cy}`]
      setSession(array)
    }
    else{
      let array = [`Jan-${cy} to Dec-${cy}`,`July-${cy} to June-${cy+1}`]
      setSession(array)
    }
  }
  
  // Get EMI Tenure Data
   const getEMITenure = async () => {
    let result = await fetch('https://api.iice.askfsd.com/emitenures')
    result = await result.json()
    if(result){
      setEMITenure(result)
    }
  }

  // Get Fees Amount
  ////////////////////////////////////////////////////////////
  let feesAmount = 0
  for (let i = 0; i < feeStructure.length; i++){
    const uname = feeStructure.map((i)=>(i.uname))
    const cname = feeStructure.map((i)=>(i.cname))
    const sname = feeStructure.map((i)=>(i.sname))
    const m1    = feeStructure.map((i)=>(i.month1))
    const match = uname[i]===universityName && cname[i]===courseName && sname[i]===specialisationName
    if(match){
      feesAmount = Number(m1[i])
    }
  }

  let remainingAmount
  if(downPayment>0 && downPayment<feesAmount){
    remainingAmount = feesAmount-downPayment
  }
  else{
    remainingAmount = feesAmount
  }
  // console.log(remainingAmount === NaN)
  // console.log(remainingAmount === 'NaN')
  
  let emiAmount
  if(month==='Select EMI Tenure' || !month){emiAmount = 0}
  else{emiAmount = Math.round(remainingAmount/month.split(' ')[0])}

  ////////////////////////////////////////////////////////////

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setStudent({ ...student, [name]: value })
  }

  const submit = async () => {
    setDisabled(true)
    let { fname, dob, father, mother, email, address, contact, altContact, photo, idProof, password, level, post } = student
    password = `${dob.split('-')[2]}${dob.split('-')[1]}${dob.split('-')[0]}`

    // logic to store ids
    for (let i = 0; i < referrer.length; i++){
      const stdName = referrer.map((i)=>(i.fname))
      const stdID = referrer.map((i)=>(i._id))
      const stdLevel = referrer.map((i)=>(i.level))
      
      const match = stdName[i]===level
      if(match){
        level=stdID[i]+' '+stdLevel[i]
        level=level.trim()
      }
    }
    
    // logic for 5 level range  
    if(level.split(' ').length===6){
      const first = level.split(' ')[5]
      level=(level.replace(first,'').trim())
    }

    let result = await fetch('https://api.iice.askfsd.com/addstudent',{
      method:'post',
      body:JSON.stringify({ fname, dob, father, mother, email, address, contact, altContact, photo, idProof, password, level, post }),
      headers:{'Content-Type':'application/json'}
    })
    result = await result.json()

    if(result.message){
      alert(result.message)
      navigate('/students')
    }
    else{
      setDisabled(false)
      alert(result.error)
    }
  }


  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Student</h2>


      <div>
        <h4 className='mt-4'>Personal Details</h4>
        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Full Name</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter Full Name" name="fname"  
            value={student.fname} onChange={handleInputs} />
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Date</label>
            <input type="date" className="form-control" autoComplete='off' placeholder="Enter Date of Birth" name="dob"  
            value={student.dob} onChange={handleInputs} />
          </div>
        </div>
        

        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Father</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter Father's Name" name="father"  
            value={student.father} onChange={handleInputs} />
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Mother</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter Mother's Name" name="mother"  
            value={student.mother} onChange={handleInputs} />
          </div>
        </div>
        

        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Email</label>
            <input type="email" className="form-control" autoComplete='off' placeholder="Enter Email Address" name="email"  
            value={student.email} onChange={handleInputs} />
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Address</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter Full Address" name="address"  
            value={student.address} onChange={handleInputs} />
          </div>        
        </div>
        

        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Contact</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter Contact Number" name="contact"  
            value={student.contact} onChange={handleInputs} />
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Alternate Contact</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter Alternate Number" name="altContact"  
            value={student.altContact} onChange={handleInputs} />
          </div>
        </div>
        

        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Photo</label>
            <input type="file" className="form-control" accept='image/*' name="photo" value={student.photo} onChange={handleInputs} />
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>ID Proof</label>
            <input type="file" className="form-control" accept='application/pdf' name="idProof" value={student.idProof} onChange={handleInputs} />
          </div>
        </div>


        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Referrer</label>
            <select className="form-select" name="level" onChange={handleInputs}>
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

          <div className="col-10 col-md-5"></div>
        </div>
      </div>

      
      <div>
        <h4 className='mt-5'>Course Details</h4>
        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Course</label>
            <select className="form-select" onChange={(e)=>setCourseName(e.target.value)}>
              <option>Select Course</option>
              {
                feeStructure.length>0 ?
                feeStructure.map((i,index)=>(
                  <option key={index}>{i.cname}</option>
                  )) :
                  <option>No Data Found</option>
              }
            </select>  
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Specialisation</label>
            <select className="form-select" onChange={(e)=>setSpecialisationName(e.target.value)}>
              <option>Select Specialisation</option>
              {
                feeStructure.length>0?
                feeStructure.map((i,index)=>(
                  <option key={index}>{i.sname}</option>
                  )) :
                  <option>No Data Found</option>
                  }
            </select>  
          </div>
        </div>

        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>University</label>
            <select className="form-select" onChange={(e)=>setUniversityName(e.target.value)}>
              <option>Select University</option>
              {
                feeStructure.length>0 ?
                feeStructure.map((i,index)=>(
                  <option key={index}>{i.uname}</option>
                  )) :
                  <option>No Data Found</option>
                }
            </select>  
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Session</label>
            <select className="form-select" onChange={(e)=>setSessionYear(e.target.value)}>
              <option>Select Session</option>
              {
                session.length>0 ?
                session.map((i,index)=>(
                  <option key={index}>{i}</option>
                  )) :
                  <option>No Data Found</option>
                }
            </select>  
          </div>  
        </div>
      </div>


      <div>
        <h4 className='mt-5'>Payment Details</h4>
        <div className="row justify-content-evenly">
          
          <div className='col-3 mt-3'>
            <b><label><input type="radio" name='payment' id='Online' onClick={(e)=>setPayment(e.target.id)}/> Online</label></b>
          </div>
          <div className='col-3 mt-3'>
            <b><label><input type="radio" name='payment' id='Cash' onClick={(e)=>setPayment(e.target.id)} /> Cash</label></b>
          </div>
          <div className='col-3 mt-3'>
            <b><label><input type="radio" name='payment' id='Card' onClick={(e)=>setPayment(e.target.id)} /> Card</label></b>
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Fees</label>
            <input type="text" className="form-control" autoComplete='off' disabled value={feesAmount} />
          </div>
          <div className="col-10 col-md-5 mt-3 left"> 
            <label className='p-2'>Down Payment</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter Down Payment" name=""  
             value={downPayment} onChange={(e)=>setDownPayment(e.target.value)} />
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>Remaining Fees</label>
            <input type="text" className="form-control" autoComplete='off' disabled value={remainingAmount} />
          </div>
          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>EMI Tenure</label>
            <select className="form-select" onChange={(e)=>setMonth(e.target.value)}>
              <option>Select EMI Tenure</option>
              {
                emiTenure.length>0 ?
                emiTenure.map((i,index)=>(
                  <option key={index}>{i.month} month</option>
                  )) :
                  <option>No Data Found</option>
              }
            </select>  
          </div>

          <div className="col-10 col-md-5 mt-3 left">
            <label className='p-2'>EMI Amount (exact)</label>
            <input type="text" className="form-control" autoComplete='off' disabled value={emiAmount} />
          </div>
          <div className="col-10 col-md-5 mt-3 left">
          <label className='p-2'>EMI Amount</label>
            <input type="text" className="form-control" autoComplete='off' placeholder="Enter EMI Amount" name=""
             />
          </div>

        </div>
      </div>          

      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddStudent