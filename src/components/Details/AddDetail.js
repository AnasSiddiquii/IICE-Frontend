import React,{useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddDetail = () => {
  
  // get dropdown values
  const [student,setStudent] = useState([])
  const [university,setUniversity] = useState([])
  const [course,setCourse] = useState([])
  const [specialisation,setSpecialisation] = useState([])
  const [session,setSession] = useState([])
  const [emiTenure,setEMITenure] = useState([])
  // specialisation hide/show logic 1/3
  const [spec1,setSpec1] = useState('a')
  const [spec2,setSpec2] = useState('b')
  const [val,setVal] = useState('')
  // get fees value
  const [price,setPrice] = useState('Fees')
  // get emi value
  const [emi,setEMI] = useState('EMI')
  //submit values
  let[studentName,setStudentName] = useState()
  const[universityName,setUniversityName] = useState()
  const[courseName,setCourseName] = useState()
  const[specialisationName,setSpecialisationName] = useState()
  const[sessionYear,setSessionYear] = useState()
  const[emiDuration,setEMIDuration] = useState()
  
  // eslint-disable-next-line 
  const navigate = useNavigate()
  
  useEffect(()=>{
    getStudent()
    getUniversity()
    getCourse()
    getSpecialisation()
    getSession()
    getEMITenure()
    // eslint-disable-next-line 
  },[])
  
  // Get Student Data
  const getStudent = async () => {
    let result = await fetch('http://localhost:5000/students')
    result = await result.json()
    if(result){
      setStudent(result)
    }
  }

  // Get University Data
  const getUniversity = async () => {
    let result = await fetch('http://localhost:5000/universities')
    result = await result.json()
    if(result){
      setUniversity(result)
    }
  }
  
  // Get Course Data
  const getCourse = async () => {
    let result = await fetch('http://localhost:5000/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }

  // Get Specialisation Data
  const getSpecialisation = async () => {
    let result = await fetch('http://localhost:5000/specialisations')
    result = await result.json()
    if(result){
      setSpecialisation(result)
    }
  }

  // Get Specialisation Data
  const getSession = async () => {
    let result = await fetch('http://localhost:5000/sessions')
    result = await result.json()
    if(result){
      setSession(result)
    }
  }
  
  // Get EMITenure Data
  const getEMITenure = async () => {
    let result = await fetch('http://localhost:5000/emitenures')
    result = await result.json()
    if(result){
      setEMITenure(result)
    }
  }
  
  // Display Fees
  const displayFees = (e) => {
    const value=e.target.value
    setVal(value)
    setSpecialisationName('General')
    if(value==='Select Course' || value==='Select Specialisation' || value==='No Data Found'){
      setPrice('Fees')
    }
    else{
      // get price
      course.map((i)=>(i.sname===value)?setPrice(i.price):null)
      specialisation.map((i)=>(i.sname===value)?setPrice(i.price):null)
      
      // specialisation hide/show logic 2/3
      // compair course > sname && spcialization > cname
      course.map((i)=>(i.sname===value)?setSpec1(i.sname):null)
      specialisation.map((i)=>(i.cname===value)?setSpec2(i.cname):null)
      
      // Set Course Name & Specialisation Name
      course.map((i)=>(i.sname===value)?setCourseName(value):null)
      specialisation.map((i)=>(i.sname===value)?setSpecialisationName(value):null)
      // specialisation.map((i)=>(i.cname===value)?console.log("hi"):console.log('bye'))
    }
  }
  
  // specialisation hide/show logic 3/3
  let trueVal=false
  if(spec1===spec2){
    trueVal=true
    // console.log('show')
  }
  if(val==='Select Course' || val==='No Data Found'){
    trueVal=false
  }  

  // Display EMI
  const displayEMI = (e) => {
    let value=e.target.value
    value=value.split(' ')[0]
    setEMIDuration(value)
    if(value==='Select' || value==='No'){
    // if(value==='Select EMI Tenure' || value==='No Data Found'){
      setEMI('EMI')
    }
    else{
      emiTenure.map((i)=>(i.month===value)?setEMI(i.month):null)
    }
  }
  const emiAmount = ((price==='Fees' || emi==='EMI')?'EMI':Math.round(price/emi))
  
  // submit data
  const submit = async () => {
    // logic for getting the stored id 
      let level = ''
      for (let i = 0; i < student.length; i++){
        let stdName = student.map((i)=>(i.name))
        let stdLevel = student.map((i)=>(i.level))
        let match = stdName[i]===studentName
        if(match){
          level=stdLevel[i]
        }
    }

    if(
      studentName!==undefined && studentName!=='Select Student' && studentName!== 'No Data Found' &&
      universityName!==undefined && universityName!=='Select University' && universityName!== 'No Data Found' &&
      courseName!==undefined && courseName!=='Select Course' && courseName!== 'No Data Found' && price!=='Fees' && 
      specialisationName!==undefined && specialisationName!=='Select Specialisation' && specialisationName!== 'No Data Found' &&
      sessionYear!==undefined && sessionYear!=='Select Session' && sessionYear!== 'No Data Found' &&
      emiDuration!==undefined && emiDuration!=='Select EMI Tenure' && emiDuration!== 'No Data Found' && emi!=='EMI'      
    ){
      // logic to iterate the stored id
      let name = ''
      // let count = 600
      let count = ''
      let amt = [5,4,3,2,1]
      let per = 0
      for(let i = 0; i < level.split(' ').length ; i++){
        let refID = level.split(' ')[i]
        
        // logic to compair stored id & student id
        for (let i = 0; i < student.length; i++){
          let stdID = student.map((i)=>(i._id))
          let stdName = student.map((i)=>(i.name))
          let match = stdID[i]===refID
          
          if(match){
            name=stdName[i]
            // count = Math.round(emiAmount/100*amt[i])
            // per = amt[i]
          }
        }  
        
          count = Math.round(emiAmount/100*amt[i])
          per = amt[i]
          // count -= 100

        if(refID&&name&&count){
          // console.log('refer amount       - ', name,count)
          console.log('refer amount       - ', name,count,'(',per,'% )')
        }
      }

    //   let result = await fetch('http://localhost:5000/details',{
    //     method:'post',
    //     body:JSON.stringify({studentName, course}),
    //     headers:{'Content-Type':'application/json'}
    //   })
    //   result = await result.json()
    //   if(result._id){
    //     alert('detail already exists')
    //   }
    //   else{
        
    //     let result = await fetch('http://localhost:5000/adddetail',{
    //       method:'post',
    //       body:JSON.stringify({studentName, universityName,courseName,specialisationName,price,sessionYear,emiDuration,emiAmount}),
    //       headers:{'Content-Type':'application/json'}
    //     })
    //     result = await result.json()
    //     if(result){
    //       navigate('/details')
    //     }
      
        // console.log('studentName        - ', studentName)
        // console.log('universityName     - ', universityName)
        // console.log('courseName         - ', courseName)
        // console.log('specialisationName - ', specialisationName)
        // console.log('price              - ', price)
        // console.log('sessionYear        - ', sessionYear)
        // console.log('emiDuration        - ', emiDuration)
        // console.log('emiAmount          - ', emiAmount)  //testing
        
      }
    else{
      // alert('fill all fields')
      console.log('fill all fields') //testing
    }
  }

  return (
    <div className='container'>
      <h2 className='text-primary mt-4'>Add Detail</h2>
      
      {/* Select Student */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setStudentName(e.target.value)}>
            <option>Select Student</option>
            {
              student.length>0 ?
              student.map((i)=>(
                <option key={i._id}>{i.name}</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>
      </div>

      {/* Select University */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setUniversityName(e.target.value)}>
            <option>Select University</option>
            {
              university.length>0 ?
              university.map((i)=>(
                <option key={i._id}>{i.name} ({i.state})</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>
      </div>

      {/* Select Course */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={displayFees}>
            <option>Select Course</option>
            {
              course.length>0 ?
              course.map((i)=>(
                <option key={i._id}>{i.sname}</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>
      </div>
      
      {/* Select Specialisation */}
      {
        trueVal ?
          <>
            <div className="row justify-content-evenly">
              <div className="col-10 col-md-6 col-lg-4">
                <select className="form-select mt-4" onChange={displayFees}>
                  <option>Select Specialisation</option>
                  {
                    specialisation.length>0?
                    specialisation.map((i)=>(
                      <option key={i._id}>{i.sname}</option>
                      )) :
                      <option>No Data Found</option>
                      }
                </select>  
              </div>
            </div>
          </> :
          null
      }
      
      {/* Show Fees */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled
          value={price} />
        </div>
      </div>

      {/* Select Session */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={(e)=>setSessionYear(e.target.value)}>
            <option>Select Session</option>
            {
              session.length>0 ?
              session.map((i)=>(
                <option key={i._id}>{i.start} to {i.end}</option>
                )) :
                <option>No Data Found</option>
            }
          </select>  
        </div>
      </div>

      {/* Select Month */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4">
          <select className="form-select mt-4" onChange={displayEMI}>
            <option>Select EMI Tenure</option>
            {
              emiTenure.length>0 ?
              emiTenure.map((i)=>(
                <option key={i._id}>{i.month} Month</option>
                )) :
                <option>No Data Found</option>
                }
          </select>  
        </div>
      </div>

      {/* Show EMI */}
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" disabled
          value={emiAmount} />
        </div>
      </div>

      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddDetail
