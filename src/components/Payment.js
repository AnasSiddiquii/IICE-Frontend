import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {

    const navigate = useNavigate()
    
    useEffect(()=>{
    
        const auth = localStorage.getItem('user')
        if (auth)(
          navigate('/adminhome')
        )
  
        // eslint-disable-next-line 
    },[])

  return (
    <div>
      <div className="row justify-content-evenly text-white">
        {/* <div className='col-2 p-2 bg-danger'>EMI Tenure</div> */}
        <div className='col-2 p-2 rounded-top bg-info border'><h5>01</h5></div>
        <div className='col-2 p-2 rounded-top bg-info border'><h5>03</h5></div>
        <div className='col-2 p-2 rounded-top bg-info border'><h5>06</h5></div>
        <div className='col-2 p-2 rounded-top bg-info border'><h5>09</h5></div>
        <div className='col-2 p-2 rounded-top bg-info border'><h5>12</h5></div>
      </div>

      <div className="row justify-content-evenly">
        {/* <div className='col-2 p-2 bg-danger'>EMI Tenure</div> */}
        <div className='col-2 p-2 rounded-bottom bg-light border'><h6>emiAmount01</h6></div>
        <div className='col-2 p-2 rounded-bottom bg-light border'><h6>emiAmount03</h6></div>
        <div className='col-2 p-2 rounded-bottom bg-light border'><h6>emiAmount06</h6></div>
        <div className='col-2 p-2 rounded-bottom bg-light border'><h6>emiAmount09</h6></div>
        <div className='col-2 p-2 rounded-bottom bg-light border'><h6>emiAmount12</h6></div>
      </div>
    </div>
  )
}

export default Payment
