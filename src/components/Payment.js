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
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Payment</h2>
    </div>
  )
}

export default Payment
