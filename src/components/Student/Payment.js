import React,{useState,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'      //////////////////////


const Payment = () => {

  const authstd = localStorage.getItem('student')
  
  const [sessionYear,setSessionYear] = useState('')
  const [emiTenure,SetEMITenure] = useState('')
  const [emiAmount,SetEMiAmount] = useState('')

  const [student,setStudent] = useState([])
  const [l1,setL1] = useState('')
  const [l2,setL2] = useState('')
  const [l3,setL3] = useState('')
  const [l4,setL4] = useState('')
  const [l5,setL5] = useState('')

  // const [paid,setpaid] = useState()          //////////////////////
  // const navigate = useNavigate()             /////////////////////
  
  useEffect(()=>{
    getDetail()
    getStudent()
    getReferral()
    // eslint-disable-next-line 
  },[])

  // Get Details Data
  const getDetail = async () => {
    let result = await fetch('https://api.iice.askfsd.com/details')
    result = await result.json()
    if(result){
      // last detail of the logged in student
      for(let i = 0; i < result.length; i++){ /////////////////
        if(result[i].studentName===JSON.parse(authstd).name){
          setSessionYear((result[i].sessionYear).split('-')[0])
          SetEMITenure(Number((result[i].emiTenure).split(' ')[0]))
          SetEMiAmount(Number(result[i].emiAmount))
        }
      } 
    }
  }
  
  // Get Month Data
  let month = ''
  if(sessionYear==='Jan'){
    month = ['January','February','March','April','May','June','July','August','Septemper','October','November','December']
  }
  if(sessionYear==='July'){
    month = ['July','August','Septemper','October','November','December','January','February','March','April','May','June']
  } 

  // Get Student Data
  const getStudent = async () => {
    let result = await fetch('https://api.iice.askfsd.com/students')
    result = await result.json()
    if(result){
      setStudent(result)
    }
  }
  
  // Get Referral Data
  const getReferral = async () => { // id of the referral block in the database 
    let result = await fetch('https://api.iice.askfsd.com/updatereferral/63ef88cebac96b23039fc960')
    result = await result.json()
    setL1(result.l1)
    setL2(result.l2)
    setL3(result.l3)
    setL4(result.l4)
    setL5(result.l5)
  }

  
  // start - get previous emi values
  const d =  new Date()
  const cm = d.getMonth()+1
  
  let array = []
  
  if(sessionYear==='Jan'){
    // if tenure is less than current month
    if(emiTenure<cm){
      for(let i = 0; i < emiTenure ; i++ ){
        array[i] = month[i]
      }
    }
    // if tenure is greater than current month
    else{
      for(let i = 0; i < cm ; i++ ){
        array[i] = month[i]
      }
    }
  }

  // if session = july
  else{
    
    switch(emiTenure){ 
      case 1:
        // 1 to 12 static
        for(let i = 0; i < emiTenure ; i++ ){array[i] = month[i]}
        break
        
      case 3:
        // 1 to 6 static and 7 to 9 dynamic and 10 to 12 Static
        if(cm===7 || cm===8 || cm===9){
          for(let i = 0; i < cm-6 ; i++){array[i] = month[i]}
        }
        else{
          for(let i = 0; i < emiTenure ; i++){array[i] = month[i]}
        }
        break
        
      case 6:
        // 1 to 6 static and 7 to 12 dynamic
        if(cm>6){
          for(let i = 0; i < cm-6 ; i++){array[i] = month[i]}
        }
        else{
          for(let i = 0; i < emiTenure ; i++){array[i] = month[i]}
        }
        break
        
      case 9:
        // 1 to 9 dynamic and 10 to 12 static
        if(cm>6){
          for(let i = 0; i < cm-6 ; i++){array[i] = month[i]}
        }
        else if(cm===1 || cm===2 || cm===3){
          for(let i = 0; i < cm+6 ; i++){array[i] = month[i]}
        }
        else{
          for(let i = 0; i < emiTenure ; i++){array[i] = month[i]}
        }
        break
        
      case 12:
        // 1 to 12 dynamic
        if(cm>6){
          for(let i = 0; i < cm-6 ; i++){array[i] = month[i]}
        }
        else{
          for(let i = 0; i < cm+6 ; i++){array[i] = month[i]}
        }
        break
      
      default:
        array = []  
    }
  }
  // end - get previous emi values
  
  
  // total amount
  let total = emiAmount*array.length  
  // let total = paid?0:emiAmount*array.length   ///////////////////////////////////// 
  // let blank = []  ////////////////////////////////////
  
  // submit data
  const submit = () => {
    // left emiTenure logic
    if((emiTenure-array.length)>0){
      console.log(`remaining emiAmount - ${emiTenure-array.length} month`)
    }
    else{
      console.log('finished')
    }

    // logic to iterate the stored id
    const level= JSON.parse(authstd).level

    let name
    let count = 0
    let per = 0
    let refer = 0
    const amt = [l5, l4, l3, l2, l1]
    
    for(let i = 0; i < level.split(' ').length ; i++){
      const refID = level.split(' ')[i]
      
      // Start logic to compair stored id & student id
      for (let i = 0; i <= student.length; i++){
        const stdID = student.map((i)=>(i._id))
        const stdName = student.map((i)=>(i.fname))
        const match = stdID[i]===refID
        
        if(match){
          name=stdName[i]
        }

      }  
      count = Math.round(total/100*amt[i])
      per = amt[i]

      // add all referral
      refer += count
      
      if(refID&&name&&count){
        console.log(`refer amount  - ${name} ${count} ( ${per}% )`)
      } 
    }
    console.log(`remaining amt - ${total-refer}`)
    // setpaid(true) /////////////////////////////
    // navigate('/payment') ////////////////////////////
  }
  

  
  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Payment</h2>
      
      {
        // paid? //////////////////////////////////////////
        // blank.map((i,index)=>
        // <div key={index}>
        //   <div className='bg-secondary mt-3 p-3 border rounded row'>
        //     <h4 className='col-1 text-light p-1'>{i}</h4>
        //     <div className='col-8 col-md-9 col-lg-10'></div>
        //     <input value={emiAmount} className='col-3 col-md-2 col-lg-1 text-center rounded text-light p-2' disabled/>
        //   </div>
        // </div>
        // ):
        array.map((i,index)=>
        <div key={index}>
          <div className='bg-secondary mt-3 p-3 border rounded row'>
            <h4 className='col-1 text-light p-1'>{i}</h4>
            <div className='col-8 col-md-9 col-lg-10'></div>
            <input value={emiAmount} className='col-3 col-md-2 col-lg-1 text-center rounded text-light p-2' disabled/>
          </div>
        </div>
        )
      }

      <div className='bg-info mt-3 p-3 border rounded row'>
        <h4 className='col-1 text-light p-1'>Total</h4>
        <div className='col-8 col-md-9 col-lg-10'></div>
        <button className='col-3 col-md-2 col-lg-1 btn btn-primary p-2' onClick={submit}>{total}</button>
        {/* <button className='col-3 col-md-2 col-lg-1 btn btn-primary p-2' onClick={submit}>{paid?0:total}</button> ///////////// */}
      </div>

    </div>
  )
}

export default Payment
