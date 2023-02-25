import React, { useEffect, useState } from 'react'

const Fees = () => {

  const [feeStructure,setFeeStructure] = useState([])

  useEffect(()=>{
    getFeeStructure()
    // eslint-disable-next-line 
  },[])

  // Get Data
  const getFeeStructure = async () => {
    let result = await fetch('https://the.iice.foundation/feestructure')
    result = await result.json()
    if(result){
      setFeeStructure(result)
    }
  }
  
  // Search Data
  const search = async(e) => {
    const key = e.target.value
    if(key){
      let result = await fetch(`https://the.iice.foundation/searchfeestructure/${key}`)
      result = await result.json()
      if(result){
        setFeeStructure(result)
      }
    }
    else{
      getFeeStructure()
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <h2 className='text-primary col-sm-4 mt-4'>Fee Structure</h2>
        <div className='col-sm-4'>
        <input type="text" className="form-control mt-4" placeholder="Search....." onChange={search} />
        </div>
      </div>
      <div className='table-responsive'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='col-1'>S&nbsp;no.</th>
              <th className='col-3'>University</th>
              <th className='col-1'>Course</th>
              <th className='col-1'>Specialisation</th>
              <th className='col-1'>Month 01</th>
              <th className='col-1'>Month 03</th>
              <th className='col-1'>Month 06</th>
              <th className='col-1'>Month 09</th>
              <th className='col-1'>Month 12</th>
            </tr>
          </thead>
          <tbody>
            {
              feeStructure.length>0?
              feeStructure.map((i,index)=>(
                <tr key={i._id}>
                  <td>{index+1}</td>
                  <td>{i.uname}</td>
                  <td>{i.cname}</td>
                  <td>{i.sname}</td>
                  <td>{i.month1}</td>
                  <td>{i.month3}</td>
                  <td>{i.month6}</td>
                  <td>{i.month9}</td>
                  <td>{i.month12}</td>
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

export default Fees