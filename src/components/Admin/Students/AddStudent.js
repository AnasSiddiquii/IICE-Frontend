import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [student,setStudent] = useState({ fname: '', dob: '', father: '', mother: '', email: '', address: '', contact: '', altContact: '', photo: '', idProof: '', password: '',level: '', post: 'student',  })

  const [referrer,setReferrer] = useState([])
  
  useEffect(()=>{
    getStudent()
    // eslint-disable-next-line 
  },[])

  // Get Student Data
  const getStudent = async () => {
    let result = await fetch('https://the.iice.foundation/students')
    result = await result.json()
    if(result){
      setReferrer(result)
    }
  }

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

    let result = await fetch('https://the.iice.foundation/addstudent',{
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


      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Full Name" name="fname"  
          value={student.fname} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="date" className="form-control" autoComplete='off' placeholder="Enter Date of Birth" name="dob"  
          value={student.dob} onChange={handleInputs} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Father's Name" name="father"  
          value={student.father} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Mother's Name" name="mother"  
          value={student.mother} onChange={handleInputs} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="email" className="form-control" autoComplete='off' placeholder="Enter Email Address" name="email"  
          value={student.email} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Full Address" name="address"  
          value={student.address} onChange={handleInputs} />
        </div>        
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Contact Number" name="contact"  
          value={student.contact} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter Alternate Number" name="altContact"  
          value={student.altContact} onChange={handleInputs} />
        </div>
      </div>
      

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-5 mt-4">
          <input type="file" className="form-control" accept='image/*' name="photo" value={student.photo} onChange={handleInputs} />
        </div>

        <div className="col-10 col-md-5 mt-4">
          <input type="file" className="form-control" accept='application/pdf' name="idProof" value={student.idProof} onChange={handleInputs} />
        </div>
      </div>


      <div className="row justify-content-evenly">
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

        <div className="col-10 col-md-5 mt-4"></div>
      </div>

      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddStudent