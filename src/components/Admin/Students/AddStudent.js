import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {

  const [name,setName] = useState('')
  const [father,setFather] = useState('')
  const [mother,setMother] = useState('')
  const [dob,setDOB] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const [altContact,setAltContact] = useState('')
  const [idProof,setIDProof] = useState('')
  const [address,setAddress] = useState('')
  const [photo,setPhoto] = useState('')
  let [level,setLevel] = useState('') //ids

  const [student,setStudent] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    getStudent()
    // eslint-disable-next-line 
  },[])

  // Get Data
  const getStudent = async () => {
    let result = await fetch('https://the.iice.foundation/students')
    result = await result.json()
    if(result){
      setStudent(result)
    }
  }

  const submit = async () => {
    
    // logic to store ids
    for (let i = 0; i < student.length; i++){
      const stdName = student.map((i)=>(i.name))
      const stdID = student.map((i)=>(i._id))
      const stdLevel = student.map((i)=>(i.level))
      
      const match = stdName[i]===level
      if(match){
        level=stdID[i]+' '+stdLevel[i]
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
    
    
    const password = Math.round(Math.random()*9999999999)+1000000000
    const post = 'student'
    if(name && father && mother && dob && email && contact && altContact && idProof && address && photo && level && password && post){
      let result = await fetch('https://the.iice.foundation/students',{
        method:'post',
        body:JSON.stringify({name, email}),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()
      if(result._id){
        alert('student already exists')
      }
      else{
        let result = await fetch('https://the.iice.foundation/addstudent',{
        method:'post',
        body:JSON.stringify({name, father, mother, dob, email, contact, altContact, idProof, address, photo, level, password, post}),
        headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result){
          navigate('/students')
        }
      }
    }
    else{
      alert('fill all fields')
    }
  }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Student</h2>


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Full Name" 
          value={name} onChange={(e)=>setName(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Father's Name" 
          value={father} onChange={(e)=>setFather(e.target.value)} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Mother's Name" 
          value={mother} onChange={(e)=>setMother(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="date" className="form-control" placeholder="Enter Date of Birth" 
          value={dob} onChange={(e)=>setDOB(e.target.value)} />
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
          <input type="file" className="form-control" value={idProof} onChange={(e)=>setIDProof(e.target.value)} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" placeholder="Enter Full Address" 
          value={address} onChange={(e)=>setAddress(e.target.value)} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="file" className="form-control" value={photo} onChange={(e)=>setPhoto(e.target.value)} />
        </div>
      </div>

      <div className="row justify-content-evenly">
         <div className="col-10 col-md-5">
          <select className="form-select mt-4" onChange={(e)=>setLevel(e.target.value)}>
            <option>Select Referrer</option>
            {
              student.length>0 ?
              student.map((i)=>(
                <option key={i._id}>{i.name}</option>
                )) :
                <option>No Data Found</option>
            }
          </select>
        </div>

        <div className="col-10 col-md-5 mt-4">
          {/* <input type="file" className="form-control" value={photo} onChange={(e)=>setPhoto(e.target.value)} /> */}
        </div>
      </div>
      

      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddStudent