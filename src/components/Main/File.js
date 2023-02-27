// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const File = () => {
  
//   const [name,setName] = useState()
//   const [logo,setImage] = useState()
//   const [form,setForm] = useState([])
  
//   useEffect(()=>{
//     getImg()
//     // eslint-disable-next-line 
//   },[])

//   const getImg = async () => {
//     let result= await fetch('https://the.iice.foundation/img')
//     result = await result.json()
//     if(result){
//       setForm(result)
//       // console.log(result)
//     }
//   }
  
//   const remove = async (id) => {
//     console.log(id)
//     let result= await fetch(`https://the.iice.foundation/img/${id}`,{
//       method : 'delete'
//     })
//     result = await result.json()
//     if(result){
//       getImg()
//     }
//   }

//   const postImg = async () => {
//     if(name && logo){
//       // let url = 'https://the.iice.foundation/img'
//       let url = 'https://the.iice.foundation/img'
      
//       const formData = new FormData()
//       formData.append('name',name)
//       formData.append('logo',logo,logo.name)
      
//       await axios.post(url,formData)
//       getImg() 
//     }
//     else{
//       alert('fill all fields')
//     }
//   }



//   return (
//     <div>
//         <div className='bg-info row'>
//           <div><input className='border rounded col-8 col-sm-6 col-md-5 col-lg-3 p-3 mt-4' type='text' placeholder='Enter Name' 
//           name='name' onChange={(e)=>setName(e.target.value)}/></div>
//           <div><input className='border rounded bg-secondary col-8 col-sm-6 col-md-5 col-lg-3 p-3 mt-4' type='file' accept='image/*' 
//           name='logo' onChange={(e)=>setImage(e.target.files[0])}/></div>
//           <div><button className='btn btn-primary rounded mt-3 mb-4' type='submit' onClick={postImg}>Submit</button></div>
//         </div>
        
        
//         <table className='table table-striped mt-5'>
//           <thead>
//             <tr className='row text-center'>
//               <th className='col-4'>Name</th>
//               {/* <th className='col-4'>Text</th> */}
//               <th className='col-4'>Image</th>
//               <th className='col-4'>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               form.map((i)=>
//                 <tr className='row text-center' key={i._id}>
//                   <td className='col-4 pt-5'>{i.name}</td>
//                   {/* <td className='col-4 pt-5'>{i.img}</td> */}
//                   <td className='col-4'><img src={`https://the.iice.foundation/uploads/${i.img}`} className='border rounded' height='100' width='100' alt='no img' /></td>
//                   <td className='col-4 pt-5'><button className='btn btn-danger rounded' onClick={()=>remove(i._id)}>Delete</button></td>
//                 </tr>
//               )
//             }
//           </tbody>
//         </table>
//     </div>
//   )
// }

// export default File

/////////////////////////////////////////
// const multer = require("multer");
// const File = require('./db/File');

// const Storage = multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.png' )
//         // cb(null,file.originalname)
//     }
// })

// const upload = multer({storage:Storage})

// app.post("/img", upload.single('logo'),  async  (req, resp)  =>  {
//     const user = new File({name:req.body.name,img:req.file.filename});
//     const result = await user.save();
//     resp.send(result)
// })

// app.get("/img", async (req,resp) => {
//     const data = await File.find()
//     resp.send(data)
// })

// app.delete('/img/:id', async (req,resp) => {
//     const result = await File.deleteOne()
//     resp.send(result)
// })
/////////////////////////////////////////
