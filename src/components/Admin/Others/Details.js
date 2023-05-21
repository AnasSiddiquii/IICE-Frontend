import React, { useEffect,useState } from 'react'

const Details = () => {

  const [detail,setDetail] = useState([])

  useEffect(()=>{
  
    getDetail()
    // eslint-disable-next-line 
  },[])

  // Get Data
  const getDetail = async () => {
    let result = await fetch('https://the.iice.foundation/details')
    result = await result.json()
    if(result){
      setDetail(result)
    }
  }

  // Delete Data
  const remove = async (id) => {
    let result = await fetch(`https://the.iice.foundation/deletedetail/${id}`,{
      method:'delete'
    })
    result = await result.json()
    if(result){
      getDetail()
    }
  }
  
  
  // Search Data
  const search = async(e) => {
    const key = e.target.value
    if(key){
      let result = await fetch(`https://the.iice.foundation/searchdetail/${key}`)
      result = await result.json()
      if(result){
        setDetail(result)
      }
    }
    else{
      getDetail()
    }
  }


  return (
      <div className='container-fluid'>
        
        <div className='row'>
            <div className='col-4'></div>
            <h2 className='text-primary col-4 mt-4'>Details</h2>
            <div className='col-4'>
            <input type="text" className="form-control mt-4" placeholder='Search.....' onChange={search} />
            </div>
        </div>
        
        {/* demo card */}
        {/* <div className='row mt-3 justify-content-evenly'>
          <div className='col-10 col-sm-5 col-lg-3 col-lg-2 items left rounded bg-dark text-white'>
            <div className='list'>
              <pre><b>University</b></pre>
              <pre><b>State</b></pre>
              <pre>User I     : User </pre>
              <pre>Course     : Course </pre>
              <pre>Spec       : Spec </pre>
              <pre>Fees       : Fees </pre>
              <pre>Session    : Session </pre>
              <pre>EMI Tenure : EMI Tenure</pre>
              <pre>EMI Amount : Amount </pre>
            </div>
            <div className='center mb-4' ><button className='btn btn-danger'>Remove</button></div>
          </div>
        </div> */}

        {/* <div className='row mt-3 justify-content-evenly'>
        {
          detail.length>0 ?
          detail.map((i,index)=>(
          <div key={i._id} className='col-10 col-sm-5 col-lg-3 col-lg-2 items left rounded bg-dark text-white'>
            <div className='list'>
              <pre><b>{i.universityName.split(' ')[0]} {i.universityName.split(' ')[1]}</b></pre>
              <pre><b>{i.universityName.split(' ')[2]} {i.universityName.split(' ')[3]}</b></pre>
              <pre>User I     : {index+1} </pre>
              <pre>Student    : {i.studentName} </pre>
              <pre>Course     : {i.courseName} </pre>
              <pre>Spec       : {i.specialisationName} </pre>
              <pre>Fees       : {i.price} </pre>
              <pre>Session    : {i.sessionYear} </pre>
              <pre>EMI Tenure : {i.emiDuration} Month</pre>
              <pre>EMI Amount : {i.emiAmount} </pre>
            </div>
            <div className='center mb-4' ><button className='btn btn-danger' onClick={()=>{remove(i._id)}}>Remove</button></div>
          </div>
          )) :
          <h3 className="stripped text-danger p-3 mt-2">No Data Found</h3>
        }
        </div> */}

        <div className='table-responsive'>
          <table className="table table-striped">
              <thead>
              <tr>
                  <th className='col-1'>S&nbsp;no.</th>
                  <th className='col-1'>Student</th>
                  <th className='col-1'>Course</th>
                  <th className='col-1'>Specialisation</th>
                  <th className='col-2'>University</th>
                  <th className='col-2'>Session</th>
                  <th className='col-1'>EMI&nbsp;Tenure</th>
                  <th className='col-1'>EMI&nbsp;Amount</th>
                  <th className='col-1'>Delete</th>
              </tr>
              </thead>
              <tbody>
                {
                  detail.length>0?
                  detail.map((i,index)=>(
                  <tr key={i._id}>
                      <td>{index+1}</td>
                      <td>{i.studentName}</td>
                      <td>{i.courseName}</td>
                      <td>{i.specialisationName}</td>
                      <td>{i.universityName}</td>
                      <td>{i.sessionYear}</td>
                      <td>{i.emiTenure}</td>
                      <td>{i.emiAmount}</td>
                      <td><button className='btn btn-danger' onClick={()=>{remove(i._id)}}>Remove</button></td>
                  </tr>
                  )):
                  (
                  <tr>
                      <td colSpan={9}><h4 className='text-danger'>No Data Found</h4></td>
                  </tr>
                  )
                }
              </tbody>
          </table>
        </div>

      </div>
    )
}

export default Details
