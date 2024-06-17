import React,{useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddDetail = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    getUniversity()
    getCourse()
    getSpecialisation()
    getSession()
    getFeeStructure()
    // eslint-disable-next-line 
  },[])
  
  const authstd = localStorage.getItem('student')
  const [disabled,setDisabled] = useState(false)

  const [courseName,setCourseName] = useState('')
  const [specialisationName,setSpecialisationName] = useState('')
  const [universityName,setUniversityName] = useState('')
  const [sessionYear,setSessionYear] = useState('')
  const [emiTenure,setEMITenure] = useState('EMI Tenure')
  const [emiAmount,setEMIAmount] = useState('EMI Amount')

   // get dropdown values
   const [course,setCourse] = useState([])
   const [specialisation,setSpecialisation] = useState([])
   const [university,setUniversity] = useState([])
   const [session,setSession] = useState([])
   const [feeStructure,setFeeStructure] = useState([])
  
  // Get University Data
  const getUniversity = async () => {
    let result = await fetch('https://api.iice.askfsd.com/universities')
    result = await result.json()
    if(result){
      setUniversity(result)
    }
  }
  
  // Get Fee Structure
  const getCourse = async () => {
    let result = await fetch('https://api.iice.askfsd.com/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }
  
  // Get Fee Structure
  const getSpecialisation = async () => {
    let result = await fetch('https://api.iice.askfsd.com/specialisations')
    result = await result.json()
    if(result){
      setSpecialisation(result)
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
  
  // Get Fee Structure Data
  const getFeeStructure = async () => {
    let result = await fetch('https://api.iice.askfsd.com/feestructure')
    result = await result.json()
    if(result){
      setFeeStructure(result)
    }
  }

  // Set EMI Value
  let month1  = '0'
  let month3  = '0'
  let month6  = '0'
  let month9  = '0'
  let month12 = '0'

  const getMonth1 = () => {
    if(month1==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('1 Month');setEMIAmount(month1)}
  }
  const getMonth3 = () => {
    if(month3==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('3 Month');setEMIAmount(month3)}
  }
  const getMonth6 = () => {
    if(month6==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('6 Month');setEMIAmount(month6)}
  }
  const getMonth9 = () => {
    if(month9==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('9 Month');setEMIAmount(month9)}
  }
  const getMonth12 = () => {
    if(month12==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('12 Month');setEMIAmount(month12)}
  }
  
  for (let i = 0; i < feeStructure.length; i++){
    const uname = feeStructure.map((i)=>(i.uname))
    const cname = feeStructure.map((i)=>(i.cname))
    const sname = feeStructure.map((i)=>(i.sname))
    const m1    = feeStructure.map((i)=>(i.month1))
    const m3    = feeStructure.map((i)=>(i.month3))
    const m6    = feeStructure.map((i)=>(i.month6))
    const m9    = feeStructure.map((i)=>(i.month9))
    const m12   = feeStructure.map((i)=>(i.month12))
    const match = uname[i]===universityName && cname[i]===courseName && sname[i]===specialisationName
    
    if(match){
      month1=m1[i]
      month3=m3[i]
      month6=m6[i]
      month9=m9[i]
      month12=m12[i]
    }
  }

  // submit data
  const submit = async () => {
    setDisabled(true)
  
    const studentID   = JSON.parse(authstd)._id
    const studentName = JSON.parse(authstd).name
    
    if(
      courseName         !== 'Select Course'         && courseName         !== 'No Data Found' && courseName         && 
      specialisationName !== 'Select Specialisation' && specialisationName !== 'No Data Found' && specialisationName && 
      universityName     !== 'Select University'     && universityName     !== 'No Data Found' && universityName     && 
      sessionYear        !== 'Select Session'        && sessionYear        !== 'No Data Found' && sessionYear        && 
      emiTenure          !== 'EMI Tenure'            && emiAmount          !== 'EMI Amount'    && studentID && studentName
      ){
        let result = await fetch('https://api.iice.askfsd.com/adddetail',{
          method:'post',
          body:JSON.stringify({studentID, studentName, courseName, specialisationName, universityName, sessionYear, emiTenure, emiAmount}),
          headers:{'Content-Type':'application/json'}
        })
        result = await result.json()
        if(result.message){
          alert(result.message)
          navigate('/payment')
        }
        else{
        setDisabled(false)
        alert(result.error)
      }
    }
    else{
      setDisabled(false)
      alert('fill all fields')
    }
  }
    
  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add Detail</h2>

      <div className="row justify-content-evenly ">
        <button className="col-8 col-md-2 mt-2 p-2 rounded bg-info border text-white"
        onClick={getMonth1}>
          <h5>01 Month</h5>
          <input type='text' className='form-control text-center mt-2' disabled value={month1} />
        </button>

        <button className="col-8 col-md-2 mt-2 p-2 rounded bg-info border text-white"
        onClick={getMonth3}>
          <h5>03 Month</h5>
          <input type='text' className='form-control text-center mt-2' disabled value={month3} />
        </button>
        
        <button className="col-8 col-md-2 mt-2 p-2 rounded bg-info border text-white"
        onClick={getMonth6}>
          <h5>06 Month</h5>
          <input type='text' className='form-control text-center mt-2' disabled value={month6} />
        </button>
        
        <button className="col-8 col-md-2 mt-2 p-2 rounded bg-info border text-white"
        onClick={getMonth9}>
          <h5>09 Month</h5>
          <input type='text' className='form-control text-center mt-2' disabled value={month9} />
        </button>
        
        <button className="col-8 col-md-2 mt-2 p-2 rounded bg-info border text-white"
        onClick={getMonth12}>
          <h5>12 Month</h5>
          <input type='text' className='form-control text-center mt-2' disabled value={month12} />
        </button>
      </div>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setCourseName(e.target.value)}>
            <option>Select Course</option>
            {
              course.length>0 ?
              course.map((i,index)=>(
                <option key={index}>{i.sname}</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>

        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setSpecialisationName(e.target.value)}>
            <option>Select Specialisation</option>
            {
              specialisation.length>0?
              specialisation.map((i,index)=>(
                <option key={index}>{i.sname}</option>
                )) :
                <option>No Data Found</option>
                }
          </select>  
        </div>
      </div>

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setUniversityName(e.target.value)}>
            <option>Select University</option>
            {
              university.length>0 ?
              university.map((i,index)=>(
                <option key={index}>{i.name} ({i.state})</option>
                )) :
                <option>No Data Found</option>
              }
          </select>  
        </div>

        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setSessionYear(e.target.value)}>
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

      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled value={emiTenure} />
        </div>

        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled value={emiAmount} />
        </div>
      </div>

      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddDetail