import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUniversity = () => {
  const navigate = useNavigate()

  const [disabled,setDisabled] = useState(false)
  const [name,setName] = useState('')
  const [logo,setLogo] = useState('')
  const [state,setState] = useState('')

  const submit = async (e) => {
    setDisabled(true)

      let result = await fetch('https://the.iice.foundation/checkuniversity',{
        method:'post',
        body:JSON.stringify({ name , state }),
        headers:{'Content-Type':'application/json'}
      })
      result = await result.json()

      if(result.error){
        setDisabled(false)
        alert(result.error)
      }
      else{
        if(!logo){
          setDisabled(false)
          alert('Please Add Logo')
        }
        else{
          let url = 'https://the.iice.foundation/adduniversity'
        
          const formData = new FormData()
          formData.append('name',name)
          formData.append('logo',logo,logo.name)
          formData.append('state',state)
          let result = await axios.post(url,formData)
          
          if(result.data.message){
            alert(result.data.message)
            navigate('/universities')
          }
          else{
            setDisabled(false)
            alert(result.data.error)
          }
        }
      }
    }

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mt-4'>Add University</h2>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter University Name" name="name"  
          onChange={(e)=>setName(e.target.value)} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="file" className="form-control" accept='image/*' name="logo" 
          onChange={(e)=>setLogo(e.target.files[0])} />
        </div>
      </div>
      
      <div className="row justify-content-evenly">
        <div className="col-10 col-md-6 col-lg-4 mt-4">
          <input type="text" className="form-control" autoComplete='off' placeholder="Enter University State" name="state"  
          onChange={(e)=>setState(e.target.value)} />
        </div>
      </div>
      
      <button type="submit" className={`btn btn-primary col-4 col-md-2 mt-4 p-2 ${disabled ? 'disabled' : null}`} onClick={submit}>Submit</button>
    </div>
  )
}

export default AddUniversity