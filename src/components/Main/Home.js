import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem('admin')
    if (auth)(
      navigate('/adminhome')
    )
    const authstd = localStorage.getItem('student')
    if (authstd)(
      navigate('/studenthome')
    )
    // eslint-disable-next-line 
  },[])

  return (
    <div className='container-fluid bg-img'>
      <div className='row justify-content-evenly'>
          <h1 className='mt-4'>Homepage</h1>
          <h4 className='p-3 mb-4 foot'>Copyright ® 2023 All Right Reserved | Privacy Policy</h4>
      </div>
    </div>
  )
}

export default Home
