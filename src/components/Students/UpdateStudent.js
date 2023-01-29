import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStudent = () => {

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
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    getStudent()
    // eslint-disable-next-line 
  },[])

  // Pre-Filled Data
  const getStudent = async () => {
    let result = await fetch(`http://localhost:5000/updatestudent/${params.id}`)
    result = await result.json()
    setName(result.name)
    setFather(result.father)
    setMother(result.mother)
    setDOB(result.dob)
    setEmail(result.email)
    setContact(result.contact)
    setAltContact(result.altContact)
    // setIDProof(result.idProof)
    setAddress(result.address)
    // setPhoto(result.photo)
  }

  // Update Data
  const submit = async () => {
    if(name && father && mother && dob && email && contact && altContact && address){
      if(idProof && photo){
        let result = await fetch(`http://localhost:5000/updatestudent/${params.id}`,{
          method:'put',
          body:JSON.stringify({name, father, mother, dob, email, contact, altContact, idProof, address, photo}),
          headers:{'Content-Type':'application/json'}
          })
        result = await result.json()
        if(result){
          navigate('/students')
        }
      }
      else if(idProof){
        let result = await fetch(`http://localhost:5000/updatestudent/${params.id}`,{
          method:'put',
          body:JSON.stringify({name, father, mother, dob, email, contact, altContact, idProof, address}),
          headers:{'Content-Type':'application/json'}
          })
        result = await result.json()
        if(result){
          navigate('/students')
        }
      }
      else if(photo){
        let result = await fetch(`http://localhost:5000/updatestudent/${params.id}`,{
          method:'put',
          body:JSON.stringify({name, father, mother, dob, email, contact, altContact, address, photo}),
          headers:{'Content-Type':'application/json'}
          })
        result = await result.json()
        if(result){
          navigate('/students')
        }
      }
      else{
        let result = await fetch(`http://localhost:5000/updatestudent/${params.id}`,{
          method:'put',
          body:JSON.stringify({name, father, mother, dob, email, contact, altContact, address}),
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
      <h2 className='text-primary mt-4'>Update Student</h2>


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
      

      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4 p-2" onClick={submit}>Submit</button>
    </div>
  )
}

export default UpdateStudent
