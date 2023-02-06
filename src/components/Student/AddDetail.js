import React,{useEffect,useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const AddDetail = () => {

  // get dropdown values
  const [student,setStudent] = useState([])
  const [university,setUniversity] = useState([])
  const [course,setCourse] = useState([])
  const [specialisation,setSpecialisation] = useState([])
  const [session,setSession] = useState([])
  const [feeStructure,setFeeStructure] = useState([])

  // get referral
  const [l1,setL1] = useState('')
  const [l2,setL2] = useState('')
  const [l3,setL3] = useState('')
  const [l4,setL4] = useState('')
  const [l5,setL5] = useState('')

  // set input values 
  let [emiTenure,setEMITenure] = useState('EMI Tenure')
  let [emiAmount,setEMIAmount] = useState('EMI Amount')

  // submit values
  const [studentName,setStudentName] = useState('')
  const [universityName,setUniversityName] = useState('')
  const [courseName,setCourseName] = useState('')
  const [specialisationName,setSpecialisationName] = useState('')
  const [sessionYear,setSessionYear] = useState('')
  
  // const navigate = useNavigate()
  
  useEffect(()=>{

    // const auth = localStorage.getItem('user')
    // if (auth)(
    //   navigate('/adminhome')
    // )

    getStudent()
    getUniversity()
    getCourse()
    getSpecialisation()
    getSession()
    getFeeStructure()
    getReferral()

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
  
  // Get Fee Structure
  const getCourse = async () => {
    let result = await fetch('http://localhost:5000/courses')
    result = await result.json()
    if(result){
      setCourse(result)
    }
  }
  
  // Get Fee Structure
  const getSpecialisation = async () => {
    let result = await fetch('http://localhost:5000/specialisations')
    result = await result.json()
    if(result){
      setSpecialisation(result)
    }
  }
  
  // Get Session Data
  const getSession = async () => {
    let result = await fetch('http://localhost:5000/sessions')
    result = await result.json()
    if(result){
      setSession(result)
    }
  }
  
  // Get Fee Structure Data
  const getFeeStructure = async () => {
    let result = await fetch('http://localhost:5000/feestructure')
    result = await result.json()
    if(result){
      setFeeStructure(result)
    }
  }

  // Get Referral Data
  const getReferral = async () => {
    let result = await fetch('http://localhost:5000/updatereferral/63d7a776fe06d48fa7bb9b40')
    result = await result.json()
    setL1(result.l1)
    setL2(result.l2)
    setL3(result.l3)
    setL4(result.l4)
    setL5(result.l5)
  }

  // Set EMI Value
  const getMonth1 = () => {
    if(month1==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('01 Month');setEMIAmount(month1)}
  }
  const getMonth3 = () => {
    if(month3==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('03 Month');setEMIAmount(month3)}
  }
  const getMonth6 = () => {
    if(month6==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('06 Month');setEMIAmount(month6)}
  }
  const getMonth9 = () => {
    if(month9==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('09 Month');setEMIAmount(month9)}
  }
  const getMonth12 = () => {
    if(month12==='0'){setEMITenure('EMI Tenure');setEMIAmount('EMI Amount')}
    else{setEMITenure('12 Month');setEMIAmount(month12)}
  }
  
  // start - get emi values
  let month1  = '0'
  let month3  = '0'
  let month6  = '0'
  let month9  = '0'
  let month12 = '0'
  
  for (let i = 0; i < feeStructure.length; i++){
    let uname = feeStructure.map((i)=>(i.uname))
    let cname = feeStructure.map((i)=>(i.cname))
    let sname = feeStructure.map((i)=>(i.sname))
    let m1    = feeStructure.map((i)=>(i.month1))
    let m3    = feeStructure.map((i)=>(i.month3))
    let m6    = feeStructure.map((i)=>(i.month6))
    let m9    = feeStructure.map((i)=>(i.month9))
    let m12   = feeStructure.map((i)=>(i.month12))
    let match = uname[i]===universityName && cname[i]===courseName && sname[i]===specialisationName
    
    if(match){
      month1=m1[i]
      month3=m3[i]
      month6=m6[i]
      month9=m9[i]
      month12=m12[i]
    }
  }
  
  if(month1==='0' && month3==='0' && month6==='0' && month9==='0' && month12==='0'){
    emiTenure='EMI Tenure'
    emiAmount='EMI Amount'
  }
  // end - get emi values
  




  // session logig


  // console.log(sessionYear.split(' ')[0]) // onclick value
  const a = session.map((i)=>(i.start)) // map value
  
  const d =  new Date()

  const cm = `0${d.getMonth()+1}`
  const cy = `${d.getFullYear()}`
  
  for(let i=0; i<a.length; i++){
    const full = a[i]

    const month = full.split('-')[0]
    const year = full.split('-')[1]
    
    let mtn = ''

    switch(month){
      case 'Jan' :
        mtn = month.replace('Jan','01')
        break
      case 'Feb' :
        mtn = month.replace('Feb','02')
        break
      case 'Mar' :
        mtn = month.replace('Mar','03')
        break
      case 'Apr' :
        mtn = month.replace('Apr','04')
        break
      case 'May' :
        mtn = month.replace('May','05')
        break
      case 'June' :
        mtn = month.replace('June','06')
        break
      case 'July' :
        mtn = month.replace('July','07')
        break
      case 'Aug' :
        mtn = month.replace('Aug','08')
        break
      case 'Sep' :
        mtn = month.replace('Sep','09')
        break
      case 'Oct' :
        mtn = month.replace('Oct','10')
        break
      case 'Nov' :
        mtn = month.replace('Nov','11')
        break
      case 'Dec' :
        mtn = month.replace('Dec','12')
        break
      default:
        console.log('invalid')
    }

    // console.log(full)
    if((year<cy) || (mtn<cm && year===cy)){console.log(full,'past')}
    else if(mtn===cm && year===cy){console.log(full,'present')}
    else if((mtn>cm && year===cy) || (year>cy)){console.log(full,'future')}
    else{console.log('Invalid')}
  }

  // session logic end


  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  
      
      
      
      

  
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
      studentName        !== 'Select Student'        && studentName        !== 'No Data Found' && studentName        &&
      universityName     !== 'Select University'     && universityName     !== 'No Data Found' && universityName     && 
      courseName         !== 'Select Course'         && courseName         !== 'No Data Found' && courseName         && 
      specialisationName !== 'Select Specialisation' && specialisationName !== 'No Data Found' && specialisationName && 
      sessionYear        !== 'Select Session'        && sessionYear        !== 'No Data Found' && sessionYear        && 
      emiTenure          !== 'EMI Tenure'            && emiAmount          !== 'EMI Amount'
    ){

      // logic to iterate the stored id
      let name = ''
      let count = ''
      let amt = [l5, l4, l3, l2, l1]
      // let amt = [5,4,3,2,1] // enter percentage
      let per = 0
      for(let i = 0; i < level.split(' ').length ; i++){
        let refID = level.split(' ')[i]
        
        // Start logic to compair stored id & student id
        for (let i = 0; i <= student.length; i++){
          let stdID = student.map((i)=>(i._id))
          let stdName = student.map((i)=>(i.name))
          let match = stdID[i]===refID
          
          if(match){
            name=stdName[i]
          }
        }  
        count = Math.round(emiAmount/100*amt[i])
        per = amt[i]
        
        if(refID&&name&&count){
          console.log('refer amount       - ', name,count,'(',per,'% )')
        }
      }
      // End logic to iterate the stored id




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
          // body:JSON.stringify({studentName, universityName,courseName,specialisationName,emiTenure,sessionYear,emiDuration,emiAmount}),
    //       headers:{'Content-Type':'application/json'}
    //     })
    //     result = await result.json()
    //     if(result){
    //       navigate('/payment')
    //     }
      
        // console.log('studentName        - ', studentName)
        // console.log('universityName     - ', universityName)
        // console.log('courseName         - ', courseName)
        // console.log('specialisationName - ', specialisationName)
        // console.log('emiTenure          - ', emiTenure)
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
              course.map((i)=>(
                <option key={i._id}>{i.sname}</option>
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
              specialisation.map((i)=>(
                <option key={i._id}>{i.sname}</option>
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
              university.map((i)=>(
                <option key={i._id}>{i.name} ({i.state})</option>
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
              session.map((i)=>(
                <option key={i._id}>{i.start} to {i.end}</option>
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

        <div className="col-10 col-md-6 col-lg-4"></div>
      </div>

      <button type="submit" className="btn btn-primary col-4 col-md-2 mt-4" onClick={submit}>Submit</button>
    </div>
  )
}

export default AddDetail
