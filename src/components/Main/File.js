import React, { useEffect, useState } from 'react'
import axios from 'axios'
const File = () => {
  
  const [image,setImage] = useState()
  const [name,setName] = useState()
  const [form,setForm] = useState([])
  
  useEffect(()=>{
    getImg()
    // eslint-disable-next-line 
  },[])

  const getImg = async () => {
    let result= await fetch('https://new.iice.foundation/img')
    result = await result.json()
    if(result){
      setForm(result)
      // console.log(result)
    }
  }
  
  const Delete = async (id) => {
    // console.log(id)
    let result= await fetch(`https://new.iice.foundation/img/${id}`,{
      method : 'delete'
    })
    result = await result.json()
    if(result){
      getImg()
    }
  }

  const postImg = async (e) => {
    e.preventDefault()
      
    if(name && image){
      let url = 'https://new.iice.foundation/img'
      
      const formData = new FormData()
      formData.append('image',image,image.name)
      formData.append('name',name)
      
      await axios.post(url,formData)
      getImg() 
    }
    else{
      alert('fill all fields')
    }
  }



  return (
    <div>
      <center>
        <form encType="multipart/form-data" className='bg-info row'>
          <div><input className='border rounded col-8 col-sm-6 col-md-5 col-lg-3 p-3 mt-4' type='text' placeholder='Enter Name' name='name' onChange={(e)=>setName(e.target.value)}/></div>
          <div><input className='border rounded bg-secondary col-8 col-sm-6 col-md-5 col-lg-3 p-3 mt-4' type='file' accept='image/*' name='image' onChange={(e)=>setImage(e.target.files[0])}/></div>
          <div><button className='btn btn-primary rounded mt-3 mb-4' type='submit' onClick={postImg}>Submit</button></div>
        </form>
        
        
        <table className='table table-striped mt-5'>
          <thead>
            <tr className='row text-center'>
              <th className='col-4'>Name</th>
              {/* <th className='col-4'>Text</th> */}
              <th className='col-4'>Image</th>
              <th className='col-4'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              form.map((i)=>
                <tr className='row text-center' key={i._id}>
                  <td className='col-4 pt-5'>{i.name}</td>
                  {/* <td className='col-4 pt-5'>{i.img}</td> */}
                  <td className='col-4'><img src={`https://new.iice.foundation/uploads/${i.img}`} className='border rounded' height='100' width='100' alt='no img' /></td>
                  <td className='col-4 pt-5'><button className='btn btn-danger rounded' onClick={()=>Delete(i._id)}>Delete</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default File
